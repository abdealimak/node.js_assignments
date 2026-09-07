const express = require('express')
const router = require('./router')

const app = express()
const PORT = 3000

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})