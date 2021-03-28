var Db = require('./dboperation');
var patient = require('patient');
const dboperation = require('./dboperation');

dboperation.getPatients().then(result => {
    console.log("result", result);
})
