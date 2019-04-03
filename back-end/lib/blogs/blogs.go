package blogs

import (
	"database/sql"
	"errors"
	"time"
)

type Blog struct {
	BlogID    int
	Text      string
	DateAdded time.Time
	Show      bool
	Private   bool
}

var BlogNotFoundError = errors.New("Blog was not found")

type BlogDB struct {
	db *sql.DB
}

func (b BlogDB) InsertBlog(text string, show, private bool) error {
	q := `INSERT INTO blogs(blog_text, private, show, date_added) VALUES ($1, $2, $3, NOW())`
	_, err := b.db.Exec(q, text, private, show)
	return err
}

func (b BlogDB) EditBlog(bl Blog) error {
	q := `UPDATE blogs set blog_text = $1, private = $2, show = $3 where blog_id = $4`
	_, err := b.db.Exec(q, bl.Text, bl.Private, bl.Show, bl.BlogID)
	return err
}

func (b BlogDB) GetBlog(blogID int) (Blog, error) {
	q := `SELECT blog_id, blog_text, private, show, date_added FROM blogs WHERE blog_id = $1`
	var blog Blog
	err := b.db.QueryRow(q, blogID).Scan(&blog.BlogID, &blog.Text, &blog.Private, &blog.Show, &blog.DateAdded)
	if err == sql.ErrNoRows {
		return blog, BlogNotFoundError
	}
	if err != nil {
		return blog, err
	}
	return blog, nil
}

func (b BlogDB) GetBlogs() ([]Blog, error) {
	q := `SELECT blog_id, blog_text, private, show, date_added FROM blogs ORDER BY date_added DESC`
	var blogs []Blog
	rows, err := b.db.Query(q)
	if err != nil {
		return blogs, err
	}
	defer rows.Close()
	for rows.Next() {
		var blog Blog
		err = rows.Scan(&blog.BlogID, &blog.Text, &blog.Private, &blog.Show, &blog.DateAdded)
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
