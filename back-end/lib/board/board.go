package board

import (
	"database/sql"
)

type Board struct {
	MemberFirstName   string
	MemberLastInitial string
	MemberPosition    string
	Importance        int
	Active            bool
}

type BoardDB struct {
	db *sql.DB
}

func (b BoardDB) GetAllMembers() ([]Board, error) {

	q := "SELECT member_first_name, member_last_initial, member_position, member_importance FROM BoardMembers WHERE member_active='t' ORDER BY member_importance ASC"
	var board []Board
	rows, err := b.db.Query(q)
	if err != nil {
		return board, err
	}
	defer rows.Close()
	for rows.Next() {
		var bp Board
		err = rows.Scan(&bp.MemberFirstName, &bp.MemberLastInitial, &bp.MemberPosition, &bp.Importance)
		if err != nil {
			return board, err
		}
		board = append(board, bp)
	}
	err = rows.Err()
	if err != nil {
		return board, err
	}
	return board, nil
}
