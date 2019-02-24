package auth

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

var NotFound = errors.New("User not found in DB")

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
	check, err := a.CheckUser(u)
	if err != nil {
		fmt.Println("Problems in getting the user: ", err)
		return
	}
	if !check {
		json.NewEncoder(w).Encode(false)
		return
	}
	json.NewEncoder(w).Encode(true)
}

func (a Authenticator) CheckUser(u User) (bool, error) {
	q := `SELECT user_id, password
		  FROM users
		  WHERE email = $1`

	var queriedUser User
	err := a.db.QueryRow(q, u.Email).Scan(&queriedUser.Id, &queriedUser.Password)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, NotFound
		}
		return false, err
	}
	if u.Password != queriedUser.Password {
		return false, nil
	}
	return true, nil
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
