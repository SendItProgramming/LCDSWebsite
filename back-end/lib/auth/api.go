package auth

import (
	"database/sql"
	"net/http"

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
