const express = require('express')

const PORT = 3000

const app = express()

app.use('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, err => {
    if (err) {
        console.error(err)
        return
    }

    console.log(`Listening at http://localhost:${PORT}/`)
})