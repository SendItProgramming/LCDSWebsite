package auth

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

type EditorLink struct {
	db *sql.DB
}

type EditorPost struct {
	Target      string
	Content     string
	LastUpdated string
}

func (link EditorLink) PostToDB(writer http.ResponseWriter, r *http.Request) {
	fmt.Println("Got to here");
	
}