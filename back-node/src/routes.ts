import express from 'express';

import IndexController from './controllers/IndexController';

const routes = express.Router();
const indexController = new IndexController();

routes.get('/', indexController.index);

export default routes;