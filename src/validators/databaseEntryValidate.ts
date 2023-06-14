import Joi from 'joi'

interface dataType {
    id: number
    name: string
    job: string
    admin: string
}

export function createUserValidate(data: dataType) {
    const schema = Joi.object({
        name: Joi.string().required(),
        job: Joi.string().required(),
        admin: Joi.string()
    })
    return schema.validate(data)
}

export function updateUserValidate(data: dataType) {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        job: Joi.string().required(),
        admin: Joi.string()
    })
    return schema.validate(data)
}

export function deleteUserValidate(data: dataType) {
    const schema = Joi.object({
        id: Joi.number().required(),
        admin: Joi.string()
    })
    return schema.validate(data)
}
