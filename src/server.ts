import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import Routes from './routes/routes'
import * as dotenv from 'dotenv'
import { AppError } from './err/AppError';
import cors from 'cors'
dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(Routes)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    };

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))