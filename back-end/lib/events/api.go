package events

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type API struct {
	ed  EventDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	e := NewEventDB(db)

	m.Handle("/", http.HandlerFunc(e.ServeEvents))
	return API{
		e,
		m,
	}
}

func (ed EventDB) ServeEvents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if r.Method == "GET" {
		fmt.Println("Do you see me jack?")
		startDate := time.Now().AddDate(0, -6, 0)
		endDate := time.Now().AddDate(0, 6, 0)
		e, err := ed.GetEvents(startDate, endDate)
		if err != nil {
			fmt.Println("We encountered an error grabbing events: ", err)
			return
		}
		json.NewEncoder(w).Encode(e)
	}
	if r.Method == "POST" {
		dec := json.NewDecoder(r.Body)
		defer r.Body.Close()
		var e Event
		if err := dec.Decode(&e); err != nil {
			fmt.Println("There was an error decoding Edit Post: ", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		err := ed.SubmitEvent(e)
		if err != nil {
			fmt.Println("Error submitting the request: ", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		w.WriteHeader(http.StatusOK)
		return
	}

}
