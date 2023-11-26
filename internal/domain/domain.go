package domain

import (
	"errors"
	"log"
	"net/http"
)

type DomainError struct {
	Code    int
	Message string
	Err     error // Original error (optional)
}

func (e *DomainError) Error() string {
	return e.Message // O cualquier otra representación de error
}

func (e *DomainError) Unwrap() error {
	return e.Err
}

type Handler func(http.ResponseWriter, *http.Request) error

func (fn Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	err := fn(w, r)
	if err != nil {
		handleError(w, err)
	}
}

func (handler Handler) Adapt() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler.ServeHTTP(w, r)
	}
}

func handleError(w http.ResponseWriter, err error) {
	var domainErr *DomainError
	if errors.As(err, &domainErr) {
		// Manejar errores de dominio específicos
		// Por ejemplo, enviar una respuesta basada en el código de error
		http.Error(w, domainErr.Message, http.StatusInternalServerError) // Ajusta esto según sea necesario
	} else {
		// Manejar otros errores
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}
	log.Println(err)
}
