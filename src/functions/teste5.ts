import { Request, Response } from 'express'

import { usersData } from '../database/fakeData'

export default function readUser(req: Request, res: Response) {

    const userId = parseInt(req.body.id) || parseInt(req.query.id as string)

    if (userId) {
        const readableUser = usersData.find(user => user.id === userId)

        if (readableUser) {
            const userViews = readableUser.views || 0
            const userName = readableUser.name

            userViews > 0 ?
                res.send(`O usuário ${userName} foi visto ${userViews} vezes.`)
                : res.send(`O usuário ${userName} ainda não foi visto.`)
        } else {
            res.status(404).send('Usuário não encontrado.')
        }

    } else {
        res.send('Para verificar as visualizações, primeiro envie uma ID válida do usuário.')
    }
}
