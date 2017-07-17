"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("./settings.json");
console.log("Function settings: " + settings);
function helloWorldHTTP(req, res) {
    console.log(req);
    res
        .status(200)
        .type("application/json")
        .send("{ \"result\": \"Hello World!\"}")
        .end();
}
exports.helloWorldHTTP = helloWorldHTTP;
function helloWorldPubSub(event, callback) {
    console.log("Hello World! I have got event: ", event);
    callback();
}
exports.helloWorldPubSub = helloWorldPubSub;
