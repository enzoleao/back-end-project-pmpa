import { Router } from 'express';
import { PolicesController } from '../controllers/polices.controller'

const policesRouter = Router();

const policesController = new PolicesController()

policesRouter.get('/', policesController.create);

export default policesRouter;