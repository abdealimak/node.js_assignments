const express = require('express')
const app = express()
const PORT = 3002

app.get('/product/:id/:category', (req, res) => {
    const id = req.params.id
    const category = req.params.category

    res.send(`Product ID: ${id}, Category: ${category}`)
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})