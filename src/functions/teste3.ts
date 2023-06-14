import fs from 'fs'
import path from 'path'
import { Request, Response } from 'express'

import { usersData } from '../database/fakeData'
import { deleteUserValidate } from '../validators/databaseEntryValidate'


export default function deleteUser(req: Request, res: Response) {

    const { error } = deleteUserValidate(req.body)
    if (error) {
        return res.status(400).send(error.message)
    }

    const userId = parseInt(req.body.id)
    const userDeleted = usersData.find(user => user.id === userId)

    if (userDeleted) {
        const usersRemaining = usersData.filter(user => user !== userDeleted)

        const databasePath = path.join(__dirname, '../database/fakeData.ts')
        const remainingUsersData = `export const usersData = ${JSON.stringify(usersRemaining, null, 2)} as any[]`
        fs.writeFileSync(databasePath, remainingUsersData, 'utf-8')

        usersData.length > usersRemaining.length ?
            res.status(200).send('Usuário deletado com sucesso.')
            : res.status(500).send('Usuário não deletado.')

    } else {
        res.status(404).send('Usuário não encontrado.')
    }
}
