import express from 'express'
import dotenv from 'dotenv'
import  adminRouter  from './routes/adminRoutes.js'
import dbConnection from './db/db.js'

const app = express()

dotenv.config()
dbConnection()

app.post('/', (req, res) => {
    res.send('Yipee! backend is working fine')
})

app.use(express.json());
app.use('/admin',adminRouter)

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`)
})