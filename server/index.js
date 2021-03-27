require('dotenv').config();
const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./controller/controller.js')

const {SERVER_PORT,CONNECTION_STRING} = process.env

app.get('/api/items', ctrl.getItems)
app.post('/api/items', ctrl.addItem)


massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
})
.then(dbInstance => {
app.set('db',dbInstance)
app.listen(SERVER_PORT,console.log(`Tonight we dine in ${SERVER_PORT} and we will remember it cause our DB is connected`))
})
.catch(err => console.log(err))

// const SERVER_PORT = 3111
app.use(express.json())
