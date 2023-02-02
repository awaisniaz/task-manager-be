import { Request, Response } from 'express';
export const create_company_controllers = {
    addCompnay: (req: Request, res: Response) => {
        res.send("I am Create Company Route")
    },
    editCompany: (req: Request, res: Response) => {
        res.send("I am Edit Company Route").status(2001)
    },
    deleteCompany: (req: Request, res: Response) => {
        res.send("I am Delete Company Router")
    }
}