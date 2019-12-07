package auth

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

var ErrNotFound = errors.New("User not found in DB")
var ErrNotMatch = errors.New("User password did not match")

var secret []byte = []byte("This is a bad secret")

const cookie = "lcdsAuthentication"

type Authenticator struct {
	db *sql.DB
}

type User struct {
	Id       int
	Email    string
	Password string
}

func (a Authenticator) AuthenticateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	u := User{
		Email:    r.FormValue("email"),
		Password: r.FormValue("password"),
	}
	result, err := a.CheckPassword(u)
	if err == ErrNotMatch {
		json.NewEncoder(w).Encode(false)
		return
	}
	if err != nil {
		fmt.Println("Problems in getting the user: ", err)
		return
	}
	u.Id = result
	t := time.Now().Add(1 * time.Hour)
	b, err := json.Marshal(u)
	if err != nil {
		fmt.Println("Problems in marshalling the user: ", err)
		return
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": string(b),
		"exp": t.String(),
	})
	tokenString, err := token.SignedString(secret)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("id: " + strconv.Itoa(u.Id) + ", email: " + u.Email)
	w.Header().Add("Content-Type", "application/jwt")
	fmt.Fprintf(w, "%s", tokenString)
}

func (a Authenticator) CheckPassword(u User) (int, error) {
	q := `SELECT user_id, (password = crypt($1, password)) AS pwd_match FROM users WHERE email=$2`

	var result bool
	var id int
	err := a.db.QueryRow(q, u.Password, u.Email).Scan(&id, &result)
	if err != nil {
		if err == sql.ErrNoRows {
			return 0, ErrNotFound
		}
		return 0, err
	}
	if !result {
		return 0, ErrNotMatch
	}
	return id, nil
}

//Do this after finishing the other stuff
func (a Authenticator) CheckCookie() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		userCookie, err := r.Cookie(cookie)
		if err == http.ErrNoCookie {
			//This will route the person to log in eventually
			return
		}
		fmt.Println(userCookie)
		return
	}
}
