# Makefile refactorizado

# Genera .env.export a partir de .env si este existe
.env.export: .env
	@echo "Creando .env.export..."
	@sed 's/^/export /' .env > .env.export 2>/dev/null || echo "Archivo .env no encontrado, continuando sin él..."

# Incluimos .env.export si existe
-include .env.export

# URL de conexión a la base de datos
DATABASE_URL := postgresql://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)?sslmode=disable

.PHONY: build build-prod test ping database-url migrate

# Función para ejecutar migraciones
define migrate
	@migrate -source file://db/migrations -database $(DATABASE_URL) $(1) $(MIGRATE_ARG)
endef

# Reglas
database-url:
	@echo $(DATABASE_URL)

build:
	go build -o bin/app

build-prod:
	CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags='-s -w' -o bin/app

test:
	go test -v ./... -count=1

ping: 
	@./bin/app ping

start:
	@./bin/app start

migrate-up:
	$(call migrate,up)

migrate-down:
	$(call migrate,down)

migrate-force:
	$(call migrate,force)

migrate-version:
	$(call migrate,version)

migrate-goto:
	$(call migrate,goto)

migrate-drop:
	$(call migrate,drop)

