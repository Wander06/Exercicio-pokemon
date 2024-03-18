import express from 'express'
import { mainRoutes } from './routes/mainRoutes'

const cors = require("cors")
const app = express()
const port = process.env.PORT || 8080

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', mainRoutes)

const server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

