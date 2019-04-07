package events

import (
	"database/sql"
	"time"
)

type Event struct {
	EventID     int       `json:"eventID"`
	Title       string    `json:"title"`
	Start       time.Time `json:"start"`
	End         time.Time `json:"end"`
	URL         string    `json:"url"`
	Location    string    `json:"location"`
	Description string    `json:"description"`
}

type EventArray struct {
	EventArr []Event `json:"event"`
}

type EventDB struct {
	db *sql.DB
}

func NewEventDB(db *sql.DB) EventDB {
	return EventDB{db}
}

func (eDB EventDB) GetEvents(startDate, endDate time.Time) (EventArray, error) {
	var e []Event
	var eArr EventArray
	q := `SELECT event_id, title, start_date, end_date, url, event_location, description
			FROM events
			where start_date >= $1 AND end_date <= $2`
	rows, err := eDB.db.Query(q, startDate, endDate)
	if err != nil {
		return eArr, err
	}
	defer rows.Close()
	for rows.Next() {
		var singleEvent Event
		var nullUrl, nullLocation sql.NullString
		err := rows.Scan(&singleEvent.EventID, &singleEvent.Title, &singleEvent.Start, &singleEvent.End, &nullUrl, &nullLocation, &singleEvent.Description)
		if err != nil {
			return eArr, err
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
		return eArr, rows.Err()
	}
	eArr.EventArr = e
	return eArr, nil
}

func (eDB EventDB) SubmitEvent(e Event) error {
	q := `INSERT INTO events(title, start_date, end_date, url, event_location, description)
			VALUES ($1, $2, $3, $4, $5, $6)`
	_, err := eDB.db.Query(q, e.Title, e.Start, e.End, e.URL, e.Location, e.Description)
	if err != nil {
		return err
	}
	return nil
}
