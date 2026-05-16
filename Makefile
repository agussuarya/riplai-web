.PHONY: up down build logs shell

ENV ?= local

up:
	docker compose --env-file .env.$(ENV) up -d

down:
	docker compose down

build:
	docker compose --env-file .env.$(ENV) build

logs:
	docker compose logs -f $(APP)

shell:
	docker compose exec $(APP) sh
