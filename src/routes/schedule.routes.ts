import { Router } from 'express';
import { ScheduleController } from '../controllers/schedule.controller';

const scheduleRoutes = Router();
const scheduleController = new ScheduleController()


scheduleRoutes.get('/', scheduleController.create);

export default scheduleRoutes;