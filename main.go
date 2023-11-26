package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
	"github.com/urfave/cli/v2"
	"github.com/wukong0111/gocms/internal/infr/server"
)

func main() {
	if os.Getenv("ENVIRONMENT") == "development" {
		err := godotenv.Load()
		if err != nil {
			log.Fatal("can not load env file")
		}
	}
	app := &cli.App{
		Name:  "MyApp",
		Usage: "A simple CLI app",
		Commands: []*cli.Command{
			{
				Name:   "start",
				Usage:  "start server",
				Action: startServer,
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}

func databaseUrl() string {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	database := os.Getenv("DB_DATABASE")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	return fmt.Sprintf("postgresql://%s:%s@%s:%s/%s?sslmode=disable",
		user,
		password,
		host,
		port,
		database)
}

func startServer(c *cli.Context) error {
	dbpool, err := pgxpool.New(context.Background(), databaseUrl())
	if err != nil {
		return err
	}
	defer dbpool.Close()
	server.Start(dbpool)
	return nil
}
