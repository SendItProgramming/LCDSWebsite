package fees

import (
	"database/sql"
	"errors"
)

var FeesNotFoundError = errors.New("Could not find the Fees")

type Fees struct {
	Fee_ID     int
	FeesClass  string
	FeesCost   string
	FeesPeriod string
}
type FeesDB struct {
	db *sql.DB
}

func (f FeesDB) GetFeesByYear(SchoolYear string) ([]Fees, error) {
	q := "SELECT fee_id, feesClass, feesCost, feesPeriod FROM fees WHERE feesClass= $1"
	var fees []Fees
	rows, err := f.db.Query(q, SchoolYear)
	defer rows.Close()

	for rows.Next() {
		var fp Fees
		err = rows.Scan(&fp.Fee_ID, &fp.FeesClass, &fp.FeesCost, &fp.FeesPeriod)

		if err != nil {

			return fees, err
		}

		fees = append(fees, fp)

		println(fees)
	}
	println("Created")
	err = rows.Err()
	if err != nil {
		return fees, err
	}
	return fees, nil
}

func (f FeesDB) GetAllFees() ([]Fees, error) {
	q := `Select * FROM fees`

	var fees []Fees
	rows, err := f.db.Query(q)
	if err != nil {
		return fees, err
	}

	defer rows.Close()

	for rows.Next() {
		var fp Fees
		err = rows.Scan(&fp.Fee_ID, &fp.FeesClass, &fp.FeesCost, &fp.FeesPeriod)

		if err != nil {
			println("ERR SCANN")
			return fees, err
		}
		println("FINNA APP")
		fees = append(fees, fp)
		println("HERE BE FEES")
		println(fees)
	}
	println("Created")
	err = rows.Err()
	if err != nil {
		return fees, err
	}
	return fees, nil
}
