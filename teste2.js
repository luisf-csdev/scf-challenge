const fs = require('fs')
const path = require('path')

const { createUserValidate } = require('./validate')
const databasePath = path.join(__dirname, 'fakeData.js')
const userData = fs.readFileSync(databasePath, 'utf-8')
const userDataArray = eval(userData)

function createUser(req, res) {

    const { error } = createUserValidate(req.body)
    if (error) {
        return res.status(400).send(error.message)
    }

    const userName = req.body.name
    const userJob = req.body.job

    const newUser = {
        id: Date.now(),
        name: userName,
        job: userJob
    }
    userDataArray.push(newUser)

    const updatedUserData = `module.exports = ${JSON.stringify(userDataArray, null, 2)}`
    fs.writeFileSync(databasePath, updatedUserData, 'utf-8')

    res.send(newUser)

};

module.exports = createUser
