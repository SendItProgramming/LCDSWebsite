package events

import (
	"database/sql"
	"time"
)

type Event struct {
	EventID     int
	Title       string
	StartDate   time.Time
	EndDate     time.Time
	URL         string
	Location    string
	Description string
}

type EventDB struct {
	db *sql.DB
}

func NewEventDB(db *sql.DB) EventDB {
	return EventDB{db}
}

func (eDB EventDB) GetEvents(startDate, endDate time.Time) ([]Event, error) {
	var e []Event
	q := `SELECT event_id, title, start_date, end_date, url, event_location, description
			FROM events
			where start_date >= $1 AND end_date <= $2`
	rows, err := eDB.db.Query(q, startDate, endDate)
	if err != nil {
		return e, err
	}
	defer rows.Close()
	for rows.Next() {
		var singleEvent Event
		var nullUrl, nullLocation sql.NullString
		err := rows.Scan(&singleEvent.EventID, &singleEvent.Title, &singleEvent.StartDate, &singleEvent.EndDate, &nullUrl, &nullLocation, &singleEvent.Description)
		if err != nil {
			return e, err
		}
		if nullUrl.Valid {
			singleEvent.URL = nullUrl.String
		}
		if nullLocation.Valid {
			singleEvent.Location = nullLocation.String
		}
		e = append(e, singleEvent)
	}
	if rows.Err() != nil {
		return e, rows.Err()
	}
	return e, nil
}

func (eDB EventDB) SubmitEvent(e Event) error {
	q := `INSERT INTO events(title, start_date, end_date, url, event_location, description)
			VALUES ($1, $2, $3, $4, $5, $6)`
	_, err := eDB.db.Query(q, e.Title, e.StartDate, e.EndDate, e.URL, e.Location, e.Description)
	if err != nil {
		return err
	}
	return nil
}
