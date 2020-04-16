const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/config/configs');

mongoose    
    .connect(
        config.MONGO_URL,
        { useNewUrsParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors({exposedHeaders: ['Content-Length', 'Authorization']}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tag', routes.tag);

app.listen(config.PORT, () => {
    console.log('server is runing');
})