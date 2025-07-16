import express from 'express'
import dotenv from 'dotenv'

const app = express()

app.post('/', (req, res) => {
    res.send('Yipee! backend is working fine')
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`)
})