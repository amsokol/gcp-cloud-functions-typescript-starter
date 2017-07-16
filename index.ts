import * as express from "express"

import * as settings from "./settings.json"

console.log(settings)

export function helloWorld(req: express.Request, res: express.Response) {
    console.log(req)

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
        .end()
}
