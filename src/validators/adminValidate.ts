import { Request, Response, NextFunction } from 'express'

export default function adminValidate(req: Request, res: Response, next: NextFunction) {

    const isAdmin = req.body.admin

    if (isAdmin === 'true') {
        next()

    } else {
        res.status(403).send('Acesso não autorizado.')
    }
}
