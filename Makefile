MAKEFLAGS += -j2

bg:
	@echo "🚀 Launching the Backend" 
	cd backend && ./pocketbase serve

fg:
	@echo "🚀 Launching the Frontend" 
	cd frontend && pnpm i && pnpm dev

clean: ## 🧹 Clean the containers
	@echo "🧹 Cleaning the data"
	rm -fr backend/pb_data/*
	rm -f backend/pb

up: bg fg ## 💄 Run all the components quickly