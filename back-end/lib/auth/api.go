package auth

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
)

type API struct {
	muxer *mux.Router
	a     Authenticator
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	a := Authenticator{db}
	m.Handle("/check", http.HandlerFunc(a.CheckPassword))
	ath := Authenticator{
		db,
	}
	return API{
		m,
		ath,
	}
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.muxer.ServeHTTP(w, r)
}

func (a API) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var tokenStrings string
		tokenString := r.Header.Get("Authorization")
		if tokenString == "Bearer" {
			tokenStrings = ""
		} else {
			str := strings.Split(tokenString, " ")
			tokenStrings = str[1]
		}
		token, err := jwt.Parse(tokenStrings, func(token *jwt.Token) (interface{}, error) {
			// Don't forget to validate the alg is what you expect:
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
			}

			// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
			return secret, nil
		})
		if err != nil {
			r.Header.Add("WWW-Authenticate", "digest")
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			b, ok := claims["sub"].(string)
			fmt.Println(claims["sub"])
			if !ok {
				fmt.Println("Casting to user failure")
				return
			}
			//This user will be verified on every request and can be checked using the JWT, This is how we authenticate
			var u User
			err := json.Unmarshal([]byte(b), &u)
			if err != nil {
				fmt.Println("Marshalling error")
				return
			}
			next.ServeHTTP(w, r)
		}
		return
	})
}
