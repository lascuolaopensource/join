.DEFAULT_GOAL := help
.PHONY: help

help: ## 🛟  Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-7s\033[0m %s\n", $$1, $$2}'

# - Setup - #

setup_backend: ## 📦 Setup the backend
	@echo "📦 Setup the backend"
	cd backend && ./setup
	@echo " "

setup_frontend: ## 📦 Setup the frontend
	@echo "📦 Setup the frontend"
	cd frontend && pnpm i
	@echo " "

setup: setup_backend setup_frontend ## 📦 Setup the project

# - Clean - #

clean_backend: ## 🧹 Clean the backend build
	@echo "🧹 Clean the backend build"
	rm -fr frontend/node_modules
	rm -fr frontend/build
	rm -fr frontend/.svelte-kit
	@echo " "

clean_frontend: ## 🧹 Clean the frontend build
	@echo "🧹 Clean the frontend build"
	rm -f

clean: clean_backend clean_frontend ## 🧹 Clean the project build

# - Running - #

be: ## ⚙️ Run the backend locally
	@echo "⚙️ Run the backend locally"
	./backend/pb serve

be_up: ## ⚙️ Run the backend in docker
	@echo "⚙️ Run the backend in docker"
	cd ./backend && docker compose up -d
	@echo " "

be_down: ## ⛔ Stop the running backend in docker
	@echo "⛔ Stop the running backend in docker"
	cd ./backend && docker compose down
	@echo " "

# sleep 2 is needed to wait for the admin server to start
# before the webapp tries to connect to it and generate the schema
# check the webapp/package.json for the predev and prebuild scripts
fe: ## ⚙️ Run the frontend locally
	@echo "⚙️ Run the frontend locally"
	sleep 2 && cd ./frontend && pnpm dev

dev:
	$(MAKE) be fe -j2

# - Utilities - #

purge: ## ⛔ Purge the database
	@echo "⛔ Purge the database"
	rm -fr backend/pb_data/*
	@echo " "

definitions: ## ⚙️ Generate type definitions and schema
	cd webapp && pnpm definitions