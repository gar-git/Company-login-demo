// config.js
let dbConfig = {};

function setdbConfig(config) {
    dbConfig = config;
}

function getdbConfig() {
return dbConfig;
}

module.exports = { setdbConfig, getdbConfig };
