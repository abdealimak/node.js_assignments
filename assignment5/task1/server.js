const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.get('/about', (req, res) => {
    res.send('This is About Page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contact Page')
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})