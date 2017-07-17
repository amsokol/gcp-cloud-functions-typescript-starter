"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
const pubsub  = require("@google-cloud/pubsub")({
    keyFilename: "/path/to/keyfile.json",
    projectId: "grape-spaceship-123"})
console.log(pubsub)
*/
const settings = require("./settings.json");
console.log(settings);
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
    console.log("Hello World! I have got event from Google Cloud Pub/Sub topic: ", event.data);
    callback();
}
exports.helloWorldPubSub = helloWorldPubSub;
function helloWorldStorage(event, callback) {
    console.log("Hello World! I have got event from Google Cloud Storage bucket: ", event.data);
    callback();
}
exports.helloWorldStorage = helloWorldStorage;
