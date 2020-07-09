import express from 'express';

import IndexController from './controllers/IndexController';
import ProgrammingController from './controllers/ProgrammingController';

const routes = express.Router();
const indexController = new IndexController();
const programmingController = new ProgrammingController();

routes.get('/', indexController.index);
routes.get('/getRPCProgramming/:date', programmingController.index);

export default routes;