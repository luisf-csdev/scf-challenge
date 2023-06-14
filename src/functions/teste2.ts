import fs from 'fs'
import path from 'path'
import { Request, Response } from 'express'

import { usersData } from '../database/fakeData'
import { createUserValidate } from '../validators/databaseEntryValidate'

export default function createUser(req: Request, res: Response) {

    const { error } = createUserValidate(req.body)
    if (error) {
        return res.status(400).send(error.message)
    }

    const userName = req.body.name
    const userJob = req.body.job

    const newUser = {
        id: Date.now(),
        name: userName,
        job: userJob,
        views: 0
    }
    usersData.push(newUser)

    const databasePath = path.join(__dirname, '../database/fakeData.ts')
    const updatedUsersData = `export const usersData = ${JSON.stringify(usersData, null, 2)} as any[]`
    fs.writeFileSync(databasePath, updatedUsersData, 'utf-8')

    res.send(newUser)
}
