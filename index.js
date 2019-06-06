const express = require('express')
const massive = require('massive')
require('dotenv').config()

const ProductsController = require('./controllers/products_controller')

const app = express()

let { SERVER_PORT, CONNECTION_STRING } = process.env


massive(CONNECTION_STRING).then(db => {
    console.log('db is on')
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json())

app.post('/api/products', ProductsController.create)
app.get('/api/products', ProductsController.getAll)
app.get('/api/products/:id', ProductsController.getOne)
app.put('/api/products/:id', ProductsController.update)
app.delete('/api/products/:id', ProductsController.delete)

app.listen(SERVER_PORT, () => {
    console.log('listening ', SERVER_PORT)
})