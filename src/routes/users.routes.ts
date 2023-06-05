import { Router } from 'express';
import { UsersController } from '../controllers/users.controller'

const usersRouter = Router();

const usersController = new UsersController()

usersRouter.get('/', usersController.create);

export default usersRouter;