package quotes

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type QuoteDB struct {
	db *sql.DB
}

type Quote struct {
	Id     int
	Text   string
	Author string
}

func (q QuoteDB) GetQuote() (Quote, error) {
	var quote Quote
	query := `SELECT * from quote limit 1`
	err := q.db.QueryRow(query).Scan(&quote.Id, &quote.Text, &quote.Author)
	if err != nil {
		return Quote{}, err
	}
	return quote, nil
}

type API struct {
	muxer *mux.Router
	q     QuoteDB
}

func (q QuoteDB) ServeQuote(w http.ResponseWriter, r *http.Request) {
	quote, err := q.GetQuote()
	if err != nil {
		fmt.Println("We errored grabbing the quote: ", err)
		return
	}
	json.NewEncoder(w).Encode(quote)
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.muxer.ServeHTTP(w, r)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	q := QuoteDB{db}
	m.Handle("/", http.HandlerFunc(q.ServeQuote))
	return API{
		m,
		q,
	}
}
