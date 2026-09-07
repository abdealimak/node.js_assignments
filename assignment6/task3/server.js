const express = require('express')

const app = express()
const PORT = 3000

const responseTimeLogger = (req, res, next) => {
    const startTime = Date.now()
    next()
    const responseTime = Date.now() - startTime

    console.log(`${req.method} ${req.url} - ${responseTime} ms`)
}

app.use(responseTimeLogger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/products', (req, res) => {
    res.send('Product List')
})

app.get('/users', (req, res) => {
    res.send('User List')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})