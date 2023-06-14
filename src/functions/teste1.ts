import fs from 'fs'
import path from 'path'
import { Request, Response } from 'express'

import { usersData } from '../database/fakeData'

const NO_USERS_MESSAGE = 'Não há usuários cadastrados.'

export function getUser(req: Request, res: Response) {
    if (usersData.some(user => user)) {

        const userName = req.body.name || req.query.name

        if (userName) {
            const userFound = usersData.find(
                user => user.name.toLowerCase() === userName.toLowerCase())

            if (userFound) {
                userFound.views = (userFound.views || 0) + 1

                const userViewed = usersData.find(user => user.id === userFound.id)

                if (userViewed) {
                    userViewed.views = userFound.views
                }

                const databasePath = path.join(__dirname, '../database/fakeData.ts')
                const updatedUsersData = `export const usersData = ${JSON.stringify(usersData, null, 2)} as any[]`
                fs.writeFileSync(databasePath, updatedUsersData, 'utf-8')

                res.send(userFound)

            } else {
                res.status(404).send('Usuário não encontrado.')
            }

        } else {
            res.send(usersData)
        }
    } else {
        res.send(NO_USERS_MESSAGE)
    }
}

export function getUsers(req: Request, res: Response) {
    if (usersData.length > 0) {
        res.send(usersData)
    } else {
        res.send(NO_USERS_MESSAGE)
    }
}
