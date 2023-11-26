package handler

import (
	"net/http"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/wukong0111/gocms/internal/domain"
	"github.com/wukong0111/gocms/internal/domain/user"
	repo "github.com/wukong0111/gocms/internal/infr/pgxrepo"
)

func HomeHandler(db *pgxpool.Pool) domain.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		user, err := getUserByID(db, "28acbcfd-a5e6-4941-b32c-30d55242871a")
		if err != nil {
			return err
		}
		w.Write([]byte(user.Username))
		return nil
	}
}

func CreateUser(db *pgxpool.Pool) domain.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		repo := repo.New(db)
		id, err := uuid.NewRandom()
		if err != nil {
			return err
		}
		user := user.NewUser(id, "godan", 1)
		err = repo.InsertUser(user, "mysecret")
		if err != nil {
			return err
		}
		w.Write([]byte("hello world!"))
		return nil
	}
}

func getUserByID(db *pgxpool.Pool, id string) (user.User, error) {
	uid := uuid.MustParse(id)
	repo := repo.New(db)
	return repo.FindUser(uid)
}
