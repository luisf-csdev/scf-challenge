const fs = require('fs')
const path = require('path')

const databasePath = path.join(__dirname, 'fakeData.js')
const userData = fs.readFileSync(databasePath, 'utf-8')
const userDataArray = eval(userData)

function deleteUser(req, res) {

    const userName = req.body.name

    const usersRemaining = userDataArray.filter(user => {
        if (user.name.toLowerCase() !== userName.toLowerCase()) {
            return user
        }
    })

    const remainingUserData = `module.exports = ${JSON.stringify(usersRemaining, null, 2)}`
    fs.writeFileSync(databasePath, remainingUserData, 'utf-8')

    userDataArray.length > usersRemaining.length ?
        res.status(200).send('Usuário deletado com sucesso')
        : res.status(400).send('Usuário não encontrado')
}

module.exports = deleteUser
