import { Router } from 'express';
import schedulesController from '../controllers/schedules.controller';

const schedulesRoutes = Router();



schedulesRoutes.get('/', schedulesController.getAll);
schedulesRoutes.post('/', schedulesController.create);

export default schedulesRoutes;