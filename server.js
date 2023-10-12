const { port, mongo_string, live_db } = require('./config');
require('./models');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const routes = require('./routes');
const morgan = require('morgan');

mongoose.Promise = global.Promise;
mongoose
    .connect(mongo_string)
    .then(() => console.log('MongoDB connected'))
    .catch(err => new Error(err));
const app = express();
app.use(morgan(':date[iso] - :req[X-Real-IP] - :method - :url - :status - :response-time ms'));
app.set('trust proxy', 1);
app.options('*', cors());
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use('/', routes);
app.listen(port);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});
console.log(`--------------------------------------------------------------`);
console.log(`Server started on port ${port}`);
console.log(`--------------------------------------------------------------`);