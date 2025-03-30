require('dotenv').config()
const { v4: uuid } = require('uuid')
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT

const projects = []

app.get('/', (request, response) => {
  return response.json({ message: "Welcome to the API" })
})

app.get('/projects', (request, response) => {
  return response.json(projects)
})

app.post('/projects', (request, response) => {
  const { name, owner } = request.body
  const project = {
    id: uuid(),
    name,
    owner
  }
  projects.push(project)
  return response.status(201).json(projects)
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const { name, owner } = request.body

  const projectIndex = projects.findIndex(project => project.id === id)

  if (projectIndex < 0) {
    return response.status(404).json({
      Error: `Project with id ${id} not found`
    })
  }

  if (!name || !owner) {
    return response.status(400).json({
      error: 'Name and Owner are required...'
    })
  }

  const project = {
    id, name, owner
  }

  projects[projectIndex] = project


  return response.json(project)
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params

  const projectIndex = projects.findIndex(project => project.id === id)

  if (projectIndex < 0) {
    return response.status(404).json({
      Error: `Project with id ${id} not found`
    })
  }

  projects.splice(projectIndex, 1)

  return response.status(204).send()
})

app.listen(PORT, () => {
  return console.log(`Server started on port ${PORT}`)
})

