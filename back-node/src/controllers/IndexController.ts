import { Request, Response } from 'express';

class IndexController {
    index (request: Request, response: Response) {
        return response.send("RPC World!")
    }
}

export default IndexController;