// Check node_env, if not set default to development - or production
// "maintaining" environment just adapt for clientPort
var env = (process.env.NODE_ENV || "production"); // production || development || maintaining
var clientPort = 3000;
var adminPort = 3030;

var jsonEnv = {
    maintaining: {
        db: "mongodb://localhost:27017/mean",
        host: "localhost"
    },
    development: {
        db: "mongodb://localhost:27017/mean",
        host: "localhost"
    },
    production: {
        db: "mongodb://localhost:27017/mean",
        host: "localhost"
    }
}

exports.getEnv = function getEnv() {
    return env;
}
exports.getEnvPara = function getEnvPara() {
    return jsonEnv[env];
}
exports.portSite = function portSite() {
    return clientPort;
}
exports.portServer = function portServer() {
    return adminPort;
}

