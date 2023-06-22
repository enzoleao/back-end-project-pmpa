import { Router } from 'express';
import cointController from '../controllers/coint.controller';

const cointRoutes = Router();


cointRoutes.get('/', cointController.getAll);
cointRoutes.post('/', cointController.create);

export default cointRoutes;