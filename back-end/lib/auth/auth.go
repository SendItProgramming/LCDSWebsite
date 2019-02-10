package auth

import (
	"database/sql"
	"errors"
	"net/http"
)

var NotFound = errors.New("User not found in DB")
const cookie = "lcdsAuthentication"
type Authenticator struct {
	db  *sql.DB
	mux *http.ServeMux
}

type User struct {
	id       int
	email    string
	password string
}

func (a Authenticator) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func (a Authenticator) CheckUser(u User) (bool, error) {
	q := `SELECT user_id, password
		  FROM users
		  WHERE email = $1`
	var queriedUser User
	err := a.db.QueryRow(q, u.email).Scan(&queriedUser.id, &queriedUser.password)
	if err != nil {
		if err != sql.ErrNoRows {
			return false, NotFound
		}
		return false, err
	}
	if u.password != queriedUser.password {
		return false, nil
	}
	return true, nil
}


//Do this after finishing the other stuff
func (a Authenticator) CheckCookie() http.Handler {
	return func(w http.ResponseWriter, r *http.Request){
		cookie, err := r.Cookie(cookie)
		if err == http.ErrNoCookie {
			//This will route the person to log in eventually
			return
		}
		return
	}
}

func CreateAuth(db *sql.DB) (Authenticator) {
	mux := http.NewServeMux()
	a := Authenticator{
		db,
		mux
	}
	return a
}


