package textediting

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	muxer *mux.Router
	el    EditorLink
}

func NewAPI(db *sql.DB) API {
	muxer := mux.NewRouter()
	EditLink := EditorLink{db}
	muxer.Handle("/save", http.HandlerFunc(EditLink.PostToDB))
	return API{
		muxer,
		EditLink,
	}
}

func (api API) ServeHTTP(writer http.ResponseWriter, requestor *http.Request) {
	api.muxer.ServeHTTP(writer, requestor)
}