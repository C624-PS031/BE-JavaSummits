import express from 'express'
import db from './config/Database.js'
import router from './routes/index.js'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import dotenv from 'dotenv'
import { sequelize } from './models/Index.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || ''

const start = async () => {
  try {
    await db.authenticate()
    console.log('Database Connected')
  } catch (e) {
    console.log(e)
  }
}

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:9000',
  methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  credentials: true, // enable set cookie
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type, Authorization',
}

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59')
  next()
})

app.use('/weather', router)

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Set additional headers to handle preflight requests
app.options('*', cors(corsOptions))

// Route-specific CORS
app.use('/users', cors(corsOptions))

app.use(router)

// const syncDatabase = async () => {
//   try {
//     await sequelize.sync({ force: true }) // Use { force: true } to drop and recreate tables
//     console.log('Database synchronized')
//   } catch (error) {
//     console.error('Failed to synchronize database:', error)
//   }
// }

// syncDatabase()

start()

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
})

export default app
