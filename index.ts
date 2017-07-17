import {Request, Response} from "express"

import PubsubEvent = GoogleCloudPlatform.CloudFunctions.PubsubEvent
import Callback = GoogleCloudPlatform.CloudFunctions.Callback

import * as settings from "./settings.json"

console.log("Function settings: " + settings)

export function helloWorldHTTP(req: Request, res: Response) {
    console.log(req)

    res
        .status(200)
        .type("application/json")
        .send("{ \"result\": \"Hello World!\"}")
        .end()
}

export function helloWorldPubSub(event: PubsubEvent, callback: Callback) {
    console.log("Hello World! I have got event: ", event)
    callback()
}
