import { Request, Response } from 'express';

class IndexController {
    index (request: Request, response: Response) {
        return response.send("Bem vindo a API de consultas da RPC!")
    }
}

export default IndexController;