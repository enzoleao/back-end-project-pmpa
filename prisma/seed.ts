import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

 
    const conintsQCG = await prisma.coint.create({
        data: {
            name: 'QCG',
            battalions: {
                create: [
                    { name: 'GAB CMD', vacancies: 0},
                    { name: 'EMG', vacancies: 8 },
                    { name: 'DGEC', vacancies: 2 },
                    { name: 'DAL', vacancies: 2 },
                    { name: 'CI', vacancies: 1 }
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPCI = await prisma.coint.create({
        data: {
            name: 'CPC I',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '1º BPM', vacancies: 2 },
                    { name: '2º BPM', vacancies: 1 },
                    { name: '20º BPM', vacancies: 2 },
                    { name: '27º BPM', vacancies: 1 },
                    { name: '28º BPM', vacancies: 1 },
                    { name: '37º BPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPCII = await prisma.coint.create({
        data: {
            name: 'CPC II',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 2 },
                    { name: '10º BPM', vacancies: 1 },
                    { name: '24º BPM', vacancies: 1 },
                    { name: '25º BPM', vacancies: 1 },
                    { name: '26º BPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRM = await prisma.coint.create({
        data: {
            name: 'CPRM',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: '6º BPM', vacancies: 1 },
                    { name: '21º BPM', vacancies: 1 },
                    { name: '29º BPM', vacancies: 1 },
                    { name: '30º BPM', vacancies: 1 },
                    { name: '39º BPM', vacancies: 1 },
                    { name: '43º BPM', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPA = await prisma.coint.create({
        data: {
            name: 'CPA',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: 'BPA', vacancies: 2 },
                    { name: 'CIPFLU', vacancies: 1 },
                    { name: '1ª CIPAMB', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPE = await prisma.coint.create({
        data: {
            name: 'CPE',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: 'BPEV', vacancies: 1 },
                    { name: 'BPOE', vacancies: 1 },
                    { name: 'BPRV', vacancies: 0 },
                    { name: 'BPGDA', vacancies: 0 },
                    { name: 'BPTUR', vacancies: 1 },
                    { name: '1º BPR', vacancies: 1 },
                    { name: '2º BPR', vacancies: 1 },
                    { name: 'CIEPAS', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCME = await prisma.coint.create({
        data: {
            name: 'CME',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: 'RPMONT', vacancies: 3 },
                    { name: 'BPCHOQUE', vacancies: 2 },
                    { name: 'ROTAM', vacancies: 2 },
                    { name: 'BOPE', vacancies: 2 },
                    { name: 'BAC', vacancies: 2 },
                    { name: 'BEP', vacancies: 2 },
                    { name: '1º BME', vacancies: 2 },
                    { name: '2º BME', vacancies: 2 },
                    { name: '3º BME', vacancies: 2 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRI = await prisma.coint.create({
        data: {
            name: 'CPR I',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '3º BPM', vacancies: 1 },
                    { name: '35º BPM', vacancies: 1 },
                    { name: '18º BPM', vacancies: 1 },
                    { name: '3º PEL', vacancies: 0 },
                    { name: '41º BPM', vacancies: 1 },
                    { name: '26ª CIPM', vacancies: 1 },
                    { name: '27ª CIPM', vacancies: 1 },
                    { name: '28ª CIPM', vacancies: 1 },
                    { name: '29ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRII = await prisma.coint.create({
        data: {
            name: 'CPR II',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '34º BPM', vacancies: 0 },
                    { name: '4º BPM', vacancies: 0 },
                    { name: '11ª CIPM', vacancies: 0 },
                    { name: '24ª CIPM', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRIII = await prisma.coint.create({
        data: {
            name: 'CPR III',
            battalions: {
                create: [
                    { name: '5º BPM', vacancies: 1 },
                    { name: '12º BPM', vacancies: 2 },
                    { name: '42º BPM', vacancies: 1 },
                    { name: '48º BPM', vacancies: 2 },
                    { name: '3ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRIV = await prisma.coint.create({
        data: {
            name: 'CPR IV',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '13º BPM', vacancies: 1 },
                    { name: '45º BPM', vacancies: 1 },
                    { name: '50º BPM', vacancies: 1 },
                    { name: '23ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRV = await prisma.coint.create({
        data: {
            name: 'CPR V',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: '7º BPM', vacancies: 1 },
                    { name: '22º BPM', vacancies: 1 },
                    { name: '30ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRVI = await prisma.coint.create({
        data: {
            name: 'CPR VI',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '19º BPM', vacancies: 1 },
                    { name: '51º BPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRVII = await prisma.coint.create({
        data: {
            name: 'CPR VII',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '11º BPM', vacancies: 2 },
                    { name: '33º BPM', vacancies: 1 },
                    { name: '44º BPM', vacancies: 2 },
                    { name: '10ª CIPM', vacancies: 1 },
                    { name: '15ª CIPM', vacancies: 1 },
                    { name: '19ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRVIII = await prisma.coint.create({
        data: {
            name: 'CPR VIII',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '16º BPM', vacancies: 1 },
                    { name: '49º BPM', vacancies: 0 },
                    { name: '16ª CIPM', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRIX = await prisma.coint.create({
        data: {
            name: 'CPR IX',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '14º BPM', vacancies: 1 },
                    { name: '31º BPM', vacancies: 2 },
                    { name: '32º BPM', vacancies: 2 },
                    { name: '47º BPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRX = await prisma.coint.create({
        data: {
            name: 'CPR X',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 2 },
                    { name: '1º CIME', vacancies: 0 },
                    { name: '15º BPM', vacancies: 2 },
                    { name: '1ª CIPM', vacancies: 0 },
                    { name: '46º BPM', vacancies: 1 },
                    { name: '17ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRXI = await prisma.coint.create({
        data: {
            name: 'CPR XI',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 0 },
                    { name: '8º BPM', vacancies: 1 },
                    { name: '73º PDPM', vacancies: 0 },
                    { name: '74º PDPM', vacancies: 0 },
                    { name: '75º PDPM', vacancies: 0 },
                    { name: '20ª CIPM', vacancies: 1 },
                    { name: '76º PDPM', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRXII = await prisma.coint.create({
        data: {
            name: 'CPR XII',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 2 },
                    { name: '9º BPM', vacancies: 2 },
                    { name: '22ª CIPM', vacancies: 1 },
                    { name: '78º PEL', vacancies: 0 },
                    { name: '32ª CIPM', vacancies: 1 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRXIII = await prisma.coint.create({
        data: {
            name: 'CPR XIII',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: '17º BPM', vacancies: 2 },
                    { name: '36º BPM', vacancies: 1 },
                    { name: '36º BPM / 78º PEL', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
    const conintsCPRXIV = await prisma.coint.create({
        data: {
            name: 'CPR XIV',
            battalions: {
                create: [
                    { name: 'SEDE', vacancies: 1 },
                    { name: '23º BPM', vacancies: 1 },
                    { name: '25ª CIPM', vacancies: 0 },
                    { name: '40º BPM', vacancies: 0 },
                ]
            }
        },
        include: {
            battalions: true
        }
    })
   
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})