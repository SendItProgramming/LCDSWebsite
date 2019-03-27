package fees

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	fd  FeesDB
	mux *mux.Router
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.mux.ServeHTTP(w, r)
}

func (fd FeesDB) GetFees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	n, err := fd.GetAllFees()
	fmt.Println("ERR:")
	fmt.Println(n)
	fmt.Println(err)
	if err != nil {
		fmt.Println("Problem in grabbing the Fees: ", err)
		return
	}
	json.NewEncoder(w).Encode(n)
}

func NewAPI(db *sql.DB) API {
	m := mux.NewRouter()
	f := FeesDB{db}
	m.Handle("/", http.HandlerFunc(f.GetFees))

	return API{f, m}
}
