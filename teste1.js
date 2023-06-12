const userData = require('./fakeData')

function getUser(req, res) {
    const userName = req.query.name

    if (userName) {
        const userFiltered = userData.filter(user => {
            if (user.name.toLowerCase().includes(userName.toLowerCase())) {
                return user
            }
        })
        res.send(userFiltered)
    }
    else {
        res.send(userData)
    }
}

function getUsers(req, res) {
    res.send(userData)
}

module.exports = { getUser, getUsers }
