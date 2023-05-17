# instill

## Prerequisite 
Docker : [installation instructions](https://docs.docker.com/engine/install/)
docker-compose: [installation instructions](https://docs.docker.com/compose/)
View application walk through [here]()


## Set up instructions
1. Clone this repo by running `git clone git@github.com:kwameasiago/instill.git`;
2. Set up a `.env` file in both frontend and api use the respective `env.example` files as a .env template 
3. In the instill root folder run `docker-compose pull` to get the images required to run both the api and frontend
4. Build both the front end and api by running `docker-compose build`
5. Run both the front end and api buy using `docker-compose up` or `docker-compose up -d` (in detached)
6. To stop the applocation tun `docker-compose down`
7. you can access the mongo-express on port 8081 `http://localhost:8081`
8. You can access the api on port 3031 `http://localhost:3031`
9. You can access the front end on port 3000 `http://localhost:3000`

NB: In the api you can use your remote MONGODB URL or use mongo db docker image. Set the database url to MONGO_URL and TEST_MONGO_URL for development and testing respectively


## Test 
NB: In order to run tests ensure that TEST_MONGO_URL enviroment variable is set.

1. Ensure you are in the api working directory 
2. bash into the api container by running `docker-compose run api bash`
3. set NODE_ENV to test by running `export NODE_ENV=test`
4. Run test by using `npm run test`

## Endpoints
**Sync enpoint** `GET /activity/sync` no params 
**Get activities** `/activity` params `type: String, activity: String, price:Number, participants: Number`






