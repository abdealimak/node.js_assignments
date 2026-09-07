const express = require('express')

const router = express.Router()

const routerLogger = (req, res, next) => {
    const now = new Date()
    const date = now.toISOString().split('T')[0]
    const time = now.toTimeString().split(' ')[0]

    console.log(`${req.method} ${req.baseUrl}${req.url} ${date} ${time}`)
    next()
}

router.use(routerLogger)

router.get('/students', (req, res) => {
    res.send('Students List')
})

router.get('/courses', (req, res) => {
    res.send('Courses List')
})

router.get('/faculty', (req, res) => {
    res.send('Faculty List')
})

module.exports = router