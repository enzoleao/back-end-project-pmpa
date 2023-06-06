import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { SchedulesRepository } from '../repositories/Schedules.repository';

export default class SchedulesController {
    static async getAll(req: Request, res: Response): Promise<Response> {
        const response = await prisma.scheduled.findMany({include: {
            user: true
        }})
        return res.json(response)
    }
    static async create(req: Request, res: Response): Promise<Response> {
        const response = await SchedulesRepository.create(req.body)
        return res.json(response)
    }
}