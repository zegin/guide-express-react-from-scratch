const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware');

const config = require('../../webpack/webpack.config');


const PORT = 3000

const app = express()

app.use(middleware(webpack(config)));

app.listen(PORT, err => {
    if (err) {
        console.error(err)
        return
    }

    console.log(`Listening at http://localhost:${PORT}/`)
})