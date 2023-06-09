// imports
import express from 'express'
import { print } from './routes/functions/printPaths'
require("dotenv").config()
import cors from 'cors'

// routes
const v1Router = require('./routes/v1')

import JsonResponse from './concerns/response'


const PORT = process.env.PORT || 3333
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express();


app
    .use(cors(corsOptions))
    .use('/api/v1/movies', v1Router)

    .use((req, res) => {
        const pathname = req.originalUrl
        const result = JsonResponse.response(`Can't found this route: ${pathname}`, false)

        res.status(404).json(result);
    })

    .listen(PORT, () => {
        console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
    })

console.log("🛣️  ROUTES")
app._router.stack.forEach(print.bind(null, []))
