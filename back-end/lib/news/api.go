package news

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	nd  NewsDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func (nd NewsDB) GetNews(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	n, err := nd.GetAllNews()
	if err != nil {
		fmt.Println("Problem in grabbing the news: ", err)
		return
	}
	json.NewEncoder(w).Encode(n)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	n := NewsDB{db}
	m.Handle("/", http.HandlerFunc(m.GetNews))
	//m.HandleFunc("/", n.GetNews)
	return API{n, m}
}
