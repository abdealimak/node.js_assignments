const express = require('express')
const app = express()
const PORT = 3000

app.get('/student/:id', (req, res) => {
    const id = req.params.id
    const name = req.query.name
    const course = req.query.course

    res.send(`Student ID: ${id}`)
    res.send(`Name: ${name}`)
    res.send(`Course: ${course}`)
})

app.listen(PORT, () => {
    console.log(`Server running on Port:${PORT}`)
})