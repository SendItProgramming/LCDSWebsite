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
	q := `SELECT event_id, title, start_date, end_date, url, location, description
			FROM events
			where start_date >= $1 and end_date <= $2`

	rows, err := eDB.db.Query(q, startDate, endDate)
	if err != nil {
		return e, err
	}
	defer rows.Close()
	for rows.Next() {
		var singleEvent Event
		err := rows.Scan(&singleEvent.EventID, &singleEvent.Title, &singleEvent.StartDate, &singleEvent.EndDate, &singleEvent.URL, &singleEvent.Location, &singleEvent.Description)
		if err != nil {
			return e, err
		}
		e = append(e, singleEvent)
	}
	if rows.Err() != nil {
		return e, rows.Err()
	}
	return e, nil
}
