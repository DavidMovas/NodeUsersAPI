require('dotenv').config();

const setConfig = () => {
    return {
        MONGODB_URL: `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
        PORT: process.env.PORT || 3000,
    };
}

module.exports = {
    config: setConfig(),
}