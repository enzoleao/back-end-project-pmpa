import { prisma } from "../prisma"

export class CointRepository {
    
    static async getAll():Promise<any> {
        const coints =  await prisma.coint.findMany({
            include: {
                battalions: {
                    orderBy: {
                        id: 'asc'
                    }
                }
            },
            orderBy: {
                id: 'asc'
            }
        })
        const response = coints.map((i)=>{
            return {
                id: i.id,
                name: i.name,
                vagas: i.battalions.reduce(function (total, battalions) {
                    return total + battalions.vacancies;
                }, 0),
                battalions: i.battalions
            }
        })
        return response
    }
}