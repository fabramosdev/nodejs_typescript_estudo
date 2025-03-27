require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

const projects = [
  "Project 1",
  "Project 2"
]

app.get('/', (request, response) => {
  return response.json({ message: "Welcome to the API" })
})

app.get('/projects', (request, response) => {
  return response.json(projects)
})

app.post('/projects', (request, response) => {
  return response.json(projects)
})

app.put('/projects/:id', (request, response) => {
  return response.json(projects)
})

app.delete('/projects/:id', (request, response) => {
  return response.json(projects)
})

app.listen(PORT, () => {
  return console.log(`Server started on port ${PORT}`)
})

