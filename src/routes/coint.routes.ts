import { Router } from 'express';
import cointController from '../controllers/coint.controller';

const cointRoutes = Router();


cointRoutes.get('/', cointController.getAll);

export default cointRoutes;