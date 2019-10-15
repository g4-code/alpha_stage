//.env config process.env.MDB_NS
//db modules...
//server
const express = require('express');
const port_serv = 3100;
const routes = require('./routes');
//static data
const alphaJson = require('./data/alpha.json');
const top5Json = require('./data/top5.json');
//db config
//
console.log("App starting...");
//new connection to db
//server
const app_servidor = express();

app_servidor.use(express.static(__dirname + '/views'));
routes(app_servidor, alphaJson, top5Json);
//server
let server = app_servidor.listen(port_serv, () => {
    try {
        let host = server.address().address;
        let port = server.address().port;
        console.log("Express():_listening at: ", host, port);
    } catch (err) {
        console.error("Server Config Error: " + err.stack);
    }
})


