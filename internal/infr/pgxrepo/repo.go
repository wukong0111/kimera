package pgxrepo

import (
	"context"
	"errors"

	"github.com/georgysavva/scany/v2/pgxscan"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/wukong0111/kimera/internal/domain/user"
	"golang.org/x/crypto/bcrypt"
)

type Repo struct {
	db *pgxpool.Pool
}

func New(db *pgxpool.Pool) Repo {
	return Repo{
		db,
	}
}

func (r Repo) FindUser(id uuid.UUID) (user.User, error) {
	sql := `select * from users where id=$1`
	ctx := context.Background()
	var users []*user.User
	err := pgxscan.Select(ctx, r.db, &users, sql, id)
	if err != nil {
		return user.User{}, err
	}
	if len(users) == 0 {
		return user.User{}, errors.New("no user")
	}
	return *users[0], nil
}

func (r Repo) InsertUser(user user.User, password string) error {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	pass := string(passwordHash)
	const query = `INSERT INTO users (id, username, password_hash, role_id, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5, $6)`
	ctx := context.Background()
	_, err = r.db.Exec(
		ctx, query,
		user.ID, user.Username, pass, user.RoleID, user.CreatedAt, user.UpdatedAt,
	)
	if err != nil {
		return err
	}
	return nil
}
