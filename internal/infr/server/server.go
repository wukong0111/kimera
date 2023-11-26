package server

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/wukong0111/gocms/internal/infr/handler"
)

func Start(dbpool *pgxpool.Pool) error {
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Get("/", handler.HomeHandler(dbpool).Adapt())

	workDir, err := os.Getwd()
	if err != nil {
		return err
	}
	filesDir := http.Dir(filepath.Join(workDir, "web"))
	r.Handle("/static/*", http.FileServer(filesDir))

	// Configurar el servidor HTTP
	server := &http.Server{
		Addr:         ":8080",
		Handler:      r, // Usa el enrutador de chi como el handler
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  30 * time.Second,
	}

	// Iniciar el servidor
	log.Println("Servidor iniciado en :8080")
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
	return nil
}
