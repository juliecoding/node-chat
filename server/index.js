const express = require('express')
const bodyParser = require('body-parser')

const messages_controller = require('./controllers/messages.controller')

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'));

const url = '/api/messages'

app.post(url, messages_controller.create)
app.get(url, messages_controller.read)
app.put(`${url}/:id`, messages_controller.update)
app.delete(`${url}/:id`, messages_controller.delete)

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
