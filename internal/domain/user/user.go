package user

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID           uuid.UUID `json:"id"`
	Username     string    `json:"userName"`
	PasswordHash string    `json:"-"`
	RoleID       uint      `json:"roleId"`
	CreatedAt    time.Time `json:"-"`
	UpdatedAt    time.Time `json:"-"`
}

func NewUser(
	id uuid.UUID,
	username string,
	roleID uint,
) User {
	return User{
		ID:        id,
		Username:  username,
		RoleID:    roleID,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
}
