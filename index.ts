import {Request, Response} from "express"

import PubsubEvent = GoogleCloudPlatform.CloudFunctions.PubsubEvent
import StorageEvent = GoogleCloudPlatform.CloudFunctions.StorageEvent
import Callback = GoogleCloudPlatform.CloudFunctions.Callback

/*
const pubsub  = require("@google-cloud/pubsub")({
    keyFilename: "/path/to/keyfile.json",
    projectId: "grape-spaceship-123"})
console.log(pubsub)
*/

import * as settings from "./settings.json"

console.log(settings)

export function helloWorldHTTP(req: Request, res: Response) {
    console.log(req)

    res
        .status(200)
        .type("application/json")
        .send("{ \"result\": \"Hello World!\"}")
        .end()
}

export function helloWorldPubSub(event: PubsubEvent, callback: Callback) {
    console.log("Hello World! I have got event from Google Cloud Pub/Sub topic: ", event.data)
    callback()
}

export function helloWorldStorage(event: StorageEvent, callback: Callback) {
    console.log("Hello World! I have got event from Google Cloud Storage bucket: ", event.data)
    callback()
}
