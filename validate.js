const Joi = require('joi')

function createUserValidate(data) {
    const schema = Joi.object({
        id: Joi.number(),
        name: Joi.string().required(),
        job: Joi.string().required()
    })
    return schema.validate(data)
}

module.exports.createUserValidate = createUserValidate