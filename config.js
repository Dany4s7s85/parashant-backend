const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongo_string: process.env.MONGO_STRING,
    port: process.env.PORT,
    live_db: process.env.MONGO_LIVE_ATRING
};
