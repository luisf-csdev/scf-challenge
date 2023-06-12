const userData = require('./fakeData')

function updateUser(req, res) {

    const userId = req.body.id;

    const reg = userData.find(d => id == id);
    reg.name = req.body.name;
    reg.job = req.body.job;

    res.send(reg);

};

module.exports = updateUser
