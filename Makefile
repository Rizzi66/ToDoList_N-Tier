build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

electron:
	npm run start:electron
