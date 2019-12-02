package staff

import (
	"database/sql"
	"fmt"
)

type Staff struct {
	FullName   string
	About      string
	Title      string
	PictureURL string
}

type StaffDB struct {
	db *sql.DB
}

func (s StaffDB) GetAllStaff() ([]Staff, error) {

	q := "SELECT full_name, about, title, picture_url FROM staff ORDER BY title"
	var staff []Staff
	rows, err := s.db.Query(q)
	if err != nil {
		return staff, err
	}
	defer rows.Close()
	for rows.Next() {
		var bp Staff
		err = rows.Scan(&bp.FullName, &bp.About, &bp.Title, &bp.PictureURL)
		if err != nil {
			return staff, err
		}
		staff = append(staff, bp)
	}
	err = rows.Err()
	if err != nil {
		return staff, err
	}
	fmt.Println(q)
	return staff, nil
}
