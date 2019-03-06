package posts

import (
	"encoding/json"
	"net/http"
)

type Post struct {
	ID   int
	Post string
}

type Reference struct {
	Link        string
	Description string
}

func ReturnDummyReferences(w http.ResponseWriter, r *http.Request) {
	refs := []Reference{
		{
			Link:        "Link 1",
			Description: "Description 1 jfkdnsjkalf",
		},
		{
			Link:        "Link 2",
			Description: "Description 2 jfkdnsjkalf",
		},
		{
			Link:        "Link 3",
			Description: "Description 345 jfkdnsjkalf",
		},
	}
	json.NewEncoder(w).Encode(refs)
}
