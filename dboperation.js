var config = require('./dbconfig');
const sql = require('mssql');

async function getPatients() {
    try {
        let pool = await sql.connect(config);
        let patients = await pool.request().query(
            "select *  from HPM_LIVE_AUG04.dbo.patient"
        );
        return patients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPatient(patientId) {
    try {
        let pool = await sql.connect(config);
        let patients = await pool.request()
            .input('input_parameter', sql.Int, patientId)
            .query(
                "select *  from HPM_LIVE_AUG04.dbo.patient where id = @input_parameter"
            );
        return patients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    getPatients: getPatients,
    getPatient: getPatient
}