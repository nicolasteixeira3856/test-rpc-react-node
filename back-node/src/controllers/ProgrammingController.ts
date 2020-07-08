import { Request, Response } from 'express';
import api from '../services/api';

class IndexController {
    async index (req: Request, res: Response) {
        const { date } = req.params;

        try {
            const { data } = await api.get('/programmes/1337', { params: {
                date: date
            }});
            return res.json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export default IndexController;