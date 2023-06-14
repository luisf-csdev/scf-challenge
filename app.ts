import express from 'express'

import { getUser, getUsers } from './src/functions/teste1'
import teste2 from './src/functions/teste2'
import teste3 from './src/functions/teste3'
import teste4 from './src/functions/teste4'
import teste5 from './src/functions/teste5'
import adminValidate from './src/validators/adminValidate'
import notFound from './src/functions/notFound'

const PORT = 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', express.static(__dirname + '/public'))
app.get('/user', getUser);
app.get('/users', getUsers);
app.post('/users', teste2)
app.delete('/users', adminValidate, teste3)
app.put('/users', adminValidate, teste4)
app.get('/users/access', teste5);

app.all('*', notFound)

app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`)
)
