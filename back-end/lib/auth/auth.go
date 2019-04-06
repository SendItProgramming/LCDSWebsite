package auth

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

var NotFound = errors.New("User not found in DB")
var NotMatch = errors.New("User password did not match")

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

func (a Authenticator) CheckPassword(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	u := User{
		Email:    r.FormValue("email"),
		Password: r.FormValue("password"),
	}
	returnedUser, err := a.CheckUser(u)
	if err == NotMatch {
		json.NewEncoder(w).Encode(false)
		return
	}
	if err != nil {
		fmt.Println("Problems in getting the user: ", err)
		return
	}
	t := time.Now().Add(1 * time.Hour)
	returnedUser.Email = u.Email
	returnedUser.Password = ""
	b, err := json.Marshal(returnedUser)
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
	w.Header().Add("Content-Type", "application/jwt")
	fmt.Fprintf(w, "%s", tokenString)
}

func (a Authenticator) CheckUser(u User) (User, error) {
	q := `SELECT user_id, password
		  FROM users
		  WHERE email = $1`

	var queriedUser User
	err := a.db.QueryRow(q, u.Email).Scan(&queriedUser.Id, &queriedUser.Password)
	if err != nil {
		if err == sql.ErrNoRows {
			return User{}, NotFound
		}
		return User{}, err
	}
	if u.Password != queriedUser.Password {
		return User{}, NotMatch
	}
	return queriedUser, nil
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
