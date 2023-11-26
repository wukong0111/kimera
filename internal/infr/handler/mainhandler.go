package handler

import (
	"html/template"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/wukong0111/kimera/internal/domain"
	"github.com/wukong0111/kimera/internal/domain/user"
	repo "github.com/wukong0111/kimera/internal/infr/pgxrepo"
)

func HomeHandler(db *pgxpool.Pool) domain.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		log.Println("responding to request")
		files := []string{
			"./web/templates/index.html",
		}
		ts, err := template.ParseFiles(files...)
		if err != nil {
			log.Println(err)
			return err
		}

		data := map[string]string{
			"js": "index.js?" + strconv.FormatInt(time.Now().Unix(), 16),
		}
		err = ts.ExecuteTemplate(w, "index.html", data)
		if err != nil {
			return err
		}
		return nil
	}
}

func CreateUserHandler(db *pgxpool.Pool) domain.Handler {
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

		user, err = getUserByID(db, user.ID.String())
		if err != nil {
			log.Println(err)
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
