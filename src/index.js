require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (request, response) => {
  return response.json({
    message: "Olá Fabiano"
  })
})

app.listen(PORT, () => {
  return console.log(`Server started on port ${PORT}`)
})

