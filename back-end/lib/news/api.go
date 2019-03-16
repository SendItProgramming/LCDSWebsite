package news

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type NewsDB struct {
	db *sql.DB
}

type News struct {
	Id         int
	Text       string
	Date       string
	Importance int
}

func (q NewsDB) GetNews() (News, error) {

	var news News
	query := `SELECT * FROM news ORDER BY date `
	err := q.db.QueryRow(query).Scan(&news.Id, &news.Text, &news.Date, &news.Importance)
	if err != nil {
		return News{}, err
	}
	return news, nil

}

type API struct {
	muxer *mux.Router
	q     NewsDB
}

func (q NewsDB) ServeNews(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	news, err := q.GetNews()
	if err != nil {
		fmt.Println("We errored grabbing news: ", err)
		return
	}
	json.NewEncoder(w).Encode(news)
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.muxer.ServeHTTP(w, r)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	q := NewsDB{db}
	m.Handle("/", http.HandlerFunc(q.ServeNews))
	return API{
		m,
		q,
	}
}
