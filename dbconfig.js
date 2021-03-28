const config = {
    user: "webapi",
    password: "webapi@123",
    database: 'HPM_LIVE_AUG04',
    server: 'localhost',
    dialact: 'mssql',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        encrypt: false
    },
    port: 1433
}

module.exports = config;