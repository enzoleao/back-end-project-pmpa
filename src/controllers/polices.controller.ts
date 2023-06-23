import {Request, Response } from 'express';
import { PolicesRepository } from '../repositories/polices.repository';

export class PolicesController {
    async update(req: Request, res: Response): Promise<Response> {

        const rg = req.params.rg
        const body = req.body.dataValues

        const respose = await PolicesRepository.update({rg, body})
        return res.json(respose)
    }
}