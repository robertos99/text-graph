# Get App running
### Requirements
- Docker
- npm
- node
- pip
- python


### Steps
#### Install backend dependencies
   - navigate to application-backend folder
   - run: pip install -r requirements.txt


#### Install frontend dependencies
   - navigate to application-frontend folder
   - run: npm install


#### Start database:
- navigate to database folder 
- navigate to where docker-compose.yml is
- run: docker compose up


#### Start backend (might dockerize this in the future)
   - navigate to application-backend folder
   - run: python app.py


#### Start frontend (might dockerize this in the future)
   - navigate to application-frontend folder
   - run: npm run dev