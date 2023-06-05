import { Request, Response } from 'express';
import { prisma } from '../prisma';

export class ScheduleController {
    async create(req: Request, res: Response): Promise<Response> {
        const response = await prisma.scheduled.findMany({include: {
            user: true
        }})
        return res.json(response)
    }
}