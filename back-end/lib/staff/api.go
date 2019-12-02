package staff

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	db  StaffDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func (db StaffDB) GetStaffMembers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	s, err := db.GetAllStaff()

	if err != nil {
		fmt.Println("Problem in grabbing the STAFF Members: ", err)
		return
	}
	json.NewEncoder(w).Encode(s)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	s := StaffDB{db}
	m.Handle("/", http.HandlerFunc(s.GetStaffMembers))

	return API{s, m}
}
