package textediting

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/mux"
)

type API struct {
	muxer *mux.Router
}

func NewAPI(db *sql.DB) API {
	muxer := mux.NewRouter()
	EditLink := EditorLink{db}
	muxer.handle("save", http.HandlerFunc(EditLink.PostToDB))
	return API{
		muxer,
		EditLink,
	}
}

func (api API) ServeHTTP(writer http.ResponseWrite, requestor *http.Request) {
	api.muxer.ServeHTTP(writer, requestor)
}