const express = require('express')
const app = express()
const PORT = 3003

app.get('/search', (req, res) => {
    const name = req.query.name
    const role = req.query.role
    res.send(`Name: ${name}, Role: ${role}`)
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})