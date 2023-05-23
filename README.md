# Get App running
### Requirements
- Docker
- npm
- node
- pip
- python


### Steps
#### 1. Start database:
   - navigate to database folder (right no its within the backend app idk why i did this)
   - navigate to where docker-compose.yml is
   - run: docker compose up


#### 2. Install backend dependencies
   - navigate to application-backend folder
   - run: pip install -r requirements.txt


#### 3. Install frontend dependencies
   - navigate to application-frontend folder
   - run: npm install


#### 4. Migrate database:
   - navigate to application-backend folder
   - run: flask db upgrade


#### 5. Start backend (might dockerize this in the future)
   - navigate to application-backend folder
   - run: python app.py


#### 6. Start frontend (might dockerize this in the future)
   - navigate to application-frontend folder
   - run: npm run dev