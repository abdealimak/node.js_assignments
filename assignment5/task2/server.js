const express = require('express')
const app = express()
const PORT = 3001

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello ${name}`)
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})