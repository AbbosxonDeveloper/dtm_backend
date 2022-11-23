import express, { Router } from 'express'
import fileupload from 'express-fileupload'
import modules from './modules/index.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())
app.use(fileupload())
app.use(modules)

app.listen(PORT, () => console.log('localhost:5000'))