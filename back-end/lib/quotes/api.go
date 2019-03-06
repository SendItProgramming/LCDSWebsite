package quotes

import (
	"database/sql"
)

type Authenticator struct {
	db *sql.DB
}

type Quote struct {
	Id       int
	Email    string
	Password string
}

func (a Authenticator) GetQuote() (bool, error) {
	q := `SELECT * from quote limit 1`
}
