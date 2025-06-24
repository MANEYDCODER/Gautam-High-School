import express from 'express'
import connect from './db/connect.js'
import cors from 'cors'
import userRouter from './routes/user.js'
import dotenv from 'dotenv'
import homeContentRouter from './routes/homeContent.js'
import historyContentRouter from './routes/historyContent .js'
import missionContentRouter from './routes/missionContent.js'

dotenv.config()

const port = process.env.PORT

const app = express()

connect()
app.use(cors())
app.use(express.json()) 
app.use(userRouter)
app.use(homeContentRouter)
app.use(historyContentRouter)
app.use(missionContentRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})