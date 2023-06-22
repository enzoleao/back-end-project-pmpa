import { Router } from 'express';

import cointRoutes from './coint.routes';
import policesRoutes from './polices.routes'
const routes = Router();


routes.use('/coint', cointRoutes)
routes.use('/polices', policesRoutes)

export default routes;