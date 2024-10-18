# NodeUsersAPI

For setup and start app need to create .env file with following variables:

### MongoDB
- `MONGO_DB_NAME` - name of mongo database
- `MONGO_ROOT_USERNAME` - root username for mongo database
- `MONGO_ROOT_PASSWORD` - root password for mongo database
- `MONGO_PORT` - port for mongo database

### Server

- `PORT` - port for server (default is 3000)
- `EXTERNAL_PORT` - port for server (external port)
- `MONGODB_URL` - url for mongo database (template: `mongodb://${MONGO_ROOT_USERNAME}:${MONGO_ROOT_PASSWORD}@mongo:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`)