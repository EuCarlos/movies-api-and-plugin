const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import { Request, Response } from 'express'
import JsonResponse from '../../concerns/response'

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', (req: Request, res: Response) => {
        var result = JsonResponse.response("Request Successfully", true, {
            name: "Carlos Alves",
            repo: "https://github.com/EuCarlos/movies_api_and_plugin",
            website: "https://carlosalves.vercel.app/"
        })

        return res.status(200).json(result)
    })

    .get('/', (req: Request, res: Response) => {
        res.send("Nothing yet")
    })

    .get('/movies/:slug', (req: Request, res: Response) => {
        res.send("Nothing yet")
    })

    .post('/', (req, res) => {
        var result = JsonResponse.response("Request Successfully", true, req.body)
        res.status(201).json(result)
    })

module.exports = router
