.DEFAULT_GOAL := help
.PHONY: help

help: ## 🛟  Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-7s\033[0m %s\n", $$1, $$2}'

# - Setup - #

setup_backend: ## 📦 Setup the backend
	@echo "📦 Setup the backend"
	cd backend && ./setup
	@echo " "

setup: setup_backend

clean_backend: ## 🧹 Clean the backend build
	@echo "🧹 Clean the backend build"
	rm -f backend/pb
	@echo " "

clean: clean_backend

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


dev:
	$(MAKE) be -j2

purge: ## ⛔ Purge the database
	@echo "⛔ Purge the database"
	rm -fr backend/pb_data/*
	@echo " "

# setup_frontend: ## 📦 Setup the frontend
# 	@echo "📦 Setup the frontend"
# 	if [ ! -f ./webapp/.env ]; then \
# 		cp ./webapp/.env.example ./webapp/.env; \
# 	fi
# 	cd webapp && pnpm i
# 	@echo " "

# setup: setup_submodules setup_backend setup_frontend ## 📦 Setup the project

# # - Running - #

# # sleep 2 is needed to wait for the admin server to start
# # before the webapp tries to connect to it and generate the schema
# # check the webapp/package.json for the predev and prebuild scripts

# be: ## ⚙️ Run the backend
# 	./admin/pb serve

# fe: ## ⚙️ Run the frontend
# 	sleep 2 && cd webapp && pnpm serve

# fe_dev: ## ⚙️ Watch the frontend
# 	sleep 2 && cd webapp && pnpm dev

# dev: ## ⚙️ Run the project in development mode
# 	$(MAKE) be fe_dev -j2

# up: setup ## ⚙️ Run the project
# 	$(MAKE) be fe -j2

# doc: ## 📚 Serve documentation on localhost
# 	npx -p docsify-cli docsify serve ./docs

# definitions: ## ⚙️ Generate type definitions and schema
# 	cd webapp && pnpm definitions

# # - Cleaning - #

# remove_git: ## 🧹 Remove git
# 	@echo "🧹 Removing git"
# 	rm -rf .git
# 	@echo " "

# clean_submodules: ## 🧹 Clean submodules
# 	@echo "🧹 Clean submodules"
# 	rm -rf admin/zencode/zenflows-crypto
# 	rm -rf webapp/zenflows-crypto
# 	@echo " "

# clean_build: ## 🧹 Clean project build
# 	@echo "🧹 Clean project build"
# 	rm -f admin/pb
# 	rm -fr webapp/node_modules
# 	rm -f webapp/src/lib/pocketbase/types.ts
# 	rm -f webapp/src/lib/pocketbase/schema/db_schema.json
# 	rm -f webapp/src/lib/rbac/roles.ts
# 	rm -f webapp/src/lib/features/list.ts
# 	@echo " "

# clean: clean_submodules clean_build ## 🧹 Clean the project


# MAKEFLAGS += -j2

# bg:
# 	@echo "🚀 Launching the Backend" 
# 	cd backend && docker-compose up -d
# fg:
# 	@echo "🚀 Launching the Frontend" 
# 	cd frontend && pnpm i && pnpm dev

# clean: ## 🧹 Clean the containers
# 	@echo "🧹 Cleaning backend data"
# 	rm -fr backend/pb_data/*

# up: bg fg ## 💄 Run all the components quickly

# down:
# 	@echo "🛑 Stopping the Backend" 
# 	cd backend && docker-compose down