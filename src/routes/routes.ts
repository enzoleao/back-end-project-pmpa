import { Router } from 'express';
import usersRouter from './users.routes';
import scheduleRoutes from './schedule.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/schedules', scheduleRoutes)

export default routes;