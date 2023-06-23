import { AppError } from "../err/AppError"
import { prisma } from "../prisma"

export class PolicesRepository {
    
    static async update(data: any):Promise<any> {
        try {

            const opm = await prisma.battalions.findUnique({
                where: {
                    id: parseInt(data.body.opm)
                }
            })
            if (opm.vacancies <= 0) {
                throw new AppError('Não possui vagas nesta OPM', 400)
            }
            const response = await prisma.polices.update({
                where: {
                    rg: data.rg,
                },
                data: {
                    battalionId: parseInt(data.body.opm)
                }
            })
            await prisma.battalions.update({
                where: {
                    id: opm.id
                },
                data: {
                    vacancies: opm?.vacancies - 1
                }
            })
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
            const responseNewCoints = coints.map((i)=>{
                return {
                    id: i.id,
                    name: i.name,
                    vagas: i.battalions.reduce(function (total, battalions) {
                        return total + battalions.vacancies;
                    }, 0),
                    battalions: i.battalions
                }
            })
            return responseNewCoints
        }catch(err){
            throw new AppError('Não possui vagas nesta OPM', 400)
        }
    }
}