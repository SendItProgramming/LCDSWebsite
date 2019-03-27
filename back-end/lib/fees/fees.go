package fees

import (
	"database/sql"
	"errors"
)

var FeesNotFoundError = errors.New("Could not find the Fees")

type Fees struct {
	ID         int
	FeesClass  string
	FeesCost   string
	FeesPeriod string
}
type FeesDB struct {
	db *sql.DB
}

// func (f FeesDb) GetFeesByYear(SchoolYear string) ([]FeesPost, error){
// 	q := "SELECT fee_id, feesClass, feesCost, feesPeriod FROM fees WHERE feesClass= $1"
// 	var fees []FeesPost

// }
func (f FeesDB) GetAllFees() ([]FeesPost, error) {
	q := `Select ID, FeesClass, FeesCost, FeesPeriod FROM fees`

	var fees []FeesPost

	rows, err := f.db.Query(q)
	if err == sql.ErrNoRows {
		return fees, err
	}
	defer rows.Close()
	for rows.Next() {
		var fp FeesPost
		err = rows.Scan(&fp.ID, &fp.FeesClass, &fp.FeesCost, &fp.FeesPeriod)
		if err != nil {
			return fees, err
		}
		fees = append(fees, fp)
	}
	err = rows.Err()
	if err != nil {
		return fees, err
	}
	return fees, nil
}
