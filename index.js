"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("./settings.json");
console.log(settings);
function helloWorld(req, res) {
    console.log(req);
    /*
    res
        .status(200)
        .type('application/json')
        .send(settings)
        .end()
    */
    res
        .status(200)
        .type("application/json")
        .send("{ \"result\": \"Hello World!\"}")
        .end();
}
exports.helloWorld = helloWorld;
