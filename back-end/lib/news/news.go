package news

import (
	"database/sql"
	"errors"
	"time"
)

var NewsNotFoundError = errors.New("Could not find News matching that ID")

type NewsPost struct {
	ID        int
	Text      string
	DateAdded time.Time
	Title     string
	Show      bool
}

type NewsDB struct {
	db *sql.DB
}

func (n NewsDB) AddNews(post string, show bool) error {
	q := `INSERT INTO news(news_text, date_added, show) VALUES $1, NOW(), $2`
	_, err := n.db.Exec(q, post, show)
	return err
}

func (n NewsDB) EditNews(np NewsPost) error {
	q := `UPDATE news SET news_text = $1, show = $2 WHERE news_id = $3`
	_, err := n.db.Exec(q, np.Text, np.Show)
	return err
}

func (n NewsDB) GetNewsByID(NewsID int) (NewsPost, error) {
	q := `SELECT news_id, news_text, show, date_added FROM news WHERE news_id = $1`
	var np NewsPost
	err := n.db.QueryRow(q, NewsID).Scan(&np.ID, &np.Text, &np.Show, &np.DateAdded)
	if err == sql.ErrNoRows {
		return np, NewsNotFoundError
	}
	if err != nil {
		return np, err
	}
	return np, err
}

func (n NewsDB) GetAllNews() ([]NewsPost, error) {
	q := "SELECT news_id, news_text, show, date_added,news_title FROM news WHERE show = 't' ORDER BY date_added DESC"
	var news []NewsPost
	rows, err := n.db.Query(q)
	if err != nil {
		return news, err
	}
	defer rows.Close()
	for rows.Next() {
		var np NewsPost
		err = rows.Scan(&np.ID, &np.Text, &np.Show, &np.DateAdded, &np.Title)
		if err != nil {
			return news, err
		}
		news = append(news, np)
	}
	err = rows.Err()
	if err != nil {
		return news, err
	}
	return news, nil
}
