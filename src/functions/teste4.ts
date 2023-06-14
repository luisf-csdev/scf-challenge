import fs from 'fs'
import path from 'path'
import { Request, Response } from 'express'

import { usersData } from '../database/fakeData'
import { updateUserValidate } from '../validators/databaseEntryValidate'


export default function updateUser(req: Request, res: Response) {

    const { error } = updateUserValidate(req.body)
    if (error) {
        return res.status(400).send(error.message)
    }

    const userId = parseInt(req.body.id)
    const userFound = usersData.find(user => user.id === userId)

    if (userFound) {
        userFound.name = req.body.name
        userFound.job = req.body.job

        const databasePath = path.join(__dirname, '../database/fakeData.ts')
        const updatedUsersData = `export const usersData = ${JSON.stringify(usersData, null, 2)} as any[]`
        fs.writeFileSync(databasePath, updatedUsersData, 'utf-8')

        res.send(userFound);

    } else {
        res.send('Usuário não encontrado.')
    }
}
