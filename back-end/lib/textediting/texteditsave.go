package textediting

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type EditorLink struct {
	db *sql.DB
}

type EditorPost struct {
	ID          int
	Target      string
	Content     string
	LastUpdated time.Time
}

func (el EditorLink) PostToDB(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	dec := json.NewDecoder(r.Body)
	defer r.Body.Close()
	var ep EditorPost
	if err := dec.Decode(&ep); err != nil {
		fmt.Println("There was an error decoding Edit Post: ", err)
		return
	}
	err := el.InsertText(ep)
	if err != nil {
		fmt.Println("There was an error inserting text post: ", err)
		return
	}
}

func (el EditorLink) GrabBlogs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	blogs, err := el.Grab10Blogs()
	if err != nil {
		fmt.Println("Encountered an error grabbing blogs: ", err)
		return
	}
	json.NewEncoder(w).Encode(blogs)
}

func (el EditorLink) InsertText(ep EditorPost) error {
	q := `INSERT INTO EditorEntries(content, last_modified, target_page) VALUES($1, $2, $3)`
	_, err := el.db.Exec(q, ep.Content, ep.LastUpdated, ep.Target)
	return err
}

func (el EditorLink) Grab10Blogs() ([]EditorPost, error) {
	q := `SELECT entry_id, content, last_modified from EditorEntries
			LIMIT 10`

	var blogs []EditorPost
	rows, err := el.db.Query(q)
	for rows.Next() {
		var blog EditorPost
		err = rows.Scan(&blog.ID, &blog.Content, &blog.LastUpdated)
		if err != nil {
			return blogs, err
		}
		blogs = append(blogs, blog)
	}
	err = rows.Err()
	if err != nil {
		return blogs, err
	}
	return blogs, nil

}
