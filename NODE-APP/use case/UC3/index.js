const express = require('express');
const ProfileController = require('./ProfileController');
 const app = express();
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/profiles', ProfileController);
app.listen(8081, () => console.log('server is ready'));