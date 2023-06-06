import { prisma } from "../prisma"

export class SchedulesRepository {
    static async create ({ time }: any):Promise<any> {
        const response = await prisma.schedules.create({
            data: {
                time: time
            }
        })
        return response
    }
}