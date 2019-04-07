package board

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	bd  BoardDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func (bd BoardDB) GetBoardMembers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	b, err := bd.GetAllMembers()

	if err != nil {
		fmt.Println("Problem in grabbing the Board Members: ", err)
		return
	}
	json.NewEncoder(w).Encode(b)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	b := BoardDB{db}
	m.Handle("/", http.HandlerFunc(b.GetBoardMembers))

	return API{b, m}
}
