const express = require('express')

const app = express()
const PORT = 3000

const logger = (req, res, next) => {
    const now = new Date()
    const date = now.toISOString().split('T')[0]
    const time = now.toTimeString().split(' ')[0]

    console.log(`${req.method} ${req.url} ${date} ${time}`)
    next()
}

app.use(logger)

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Information')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})