package posts

import (
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	muxer *mux.Router
}

func NewAPI() API {
	m := mux.NewRouter()
	m.Handle("/resources", http.HandlerFunc(ReturnDummyReferences))
	return API{
		m,
	}
}

func (a API) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	a.muxer.ServeHTTP(w, r)
}
