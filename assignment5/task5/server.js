const express = require('express')
const app = express()
const PORT = 3004

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})

app.get('/about', (req, res) => {
    res.send('This is About Page')
})

app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.get('/search', (req, res) => {
    res.send(`Search result for ${req.query.name}`)
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})