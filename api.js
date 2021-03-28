var Db = require('./dboperation');
var patient = require('./patient');
const dboperation = require('./dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();

var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
    console.log('middleware');
    next();
});

router.route('/patients').get((request, response) => {
    dboperation.getPatients().then(result => {
        response.json(result[0]);
    })
});

var port = process.env.PORT || 8098;
app.listen(port);
console.log('Patient API is running at ' + port);


