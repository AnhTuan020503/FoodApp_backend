const config = require("./package.json").projectConfig;

module.exports = {
    mongoConfig :{
        connectionUrl: "mongodb://localhost:27017",
        database : "foodelivery_db",
        collections:{
            USERS : "users",
            RESTAURANTS:"restaurants",
            CARTS: "carts",
            FOODS:"foods"
        },
    },
    serverConfig:{
        ip: config.serverIp,
        port: config.serverPort,
    },
    tokenSecret: "foodelivery_secret"
}