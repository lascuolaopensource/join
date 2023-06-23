MAKEFLAGS += -j2

bg:
	@echo "🚀 Launching the Backend" 
	cd backend && docker-compose up -d
fg:
	@echo "🚀 Launching the Frontend" 
	cd frontend && pnpm i && pnpm dev

clean: ## 🧹 Clean the containers
	@echo "🧹 Cleaning backend data"
	rm -fr backend/pb_data/*

up: bg fg ## 💄 Run all the components quickly

down:
	@echo "🛑 Stopping the Backend" 
	cd backend && docker-compose down