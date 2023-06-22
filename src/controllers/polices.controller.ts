import {Request, Response } from 'express';

export class PolicesController {
    async create(req: Request, res: Response): Promise<Response> {
        return res.json("ok")
    }
}