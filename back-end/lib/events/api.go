package events

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	"github.com/gorilla/mux"
)

type API struct {
	ed  EventDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResonseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	e := NewEventDB(db)

	m.HandleFunc("/", e.ServeEvents(w, r))
}

func (ed EventDB) ServeEvents(w http.ResponseWriter, r *http.Request) {
	startDate := time.Now().AddDate(0, -6, 0)
	endDate := time.Now().AddDate(0, 6, 0)
	e, err := ed.GetEvents(startDate, endDate)
	if err != nil {
		fmt.Println("We encountered an error grabbing events: ", err)
		return
	}
	json.NewEncoder(w).Encode(e)

}
