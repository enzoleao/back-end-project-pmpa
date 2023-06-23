import { Request, Response } from 'express';
import { CointRepository } from '../repositories/coints.repository';

export default class SchedulesController {
    static async getAll(req: Request, res: Response): Promise<Response> {
        const response = await CointRepository.getAll()
        return res.json(response)
    }
}