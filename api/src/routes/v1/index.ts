const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import { Request, Response } from 'express'
import { Slug } from 'src/concerns/slug'
import JsonResponse from '../../concerns/response'

import database from '../../database/movies.json'

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', (req: Request, res: Response) => {
        const results = database.map((props,) => ({
            url: `http://${req.headers.host}/api/v1/movies/${props.slug}`,
            ...props
        }))

        const response = JsonResponse.response("Request Successfully", true, results)

        res.status(200).json(response)
    })

    .get('/:slug', (req: Request, res: Response) => {
        const slug = Slug.stringToSlug(req.params.slug);

        const result = database.map((props) => ({
            url: `http://${req.headers.host}/api/v1/movies/${props.slug}`,
            ...props
        })).filter(props => (
            props.slug === slug 
            || Slug.stringToSlug(props.name) === slug 
            || props.id === slug
        ));
        
        if(result.length < 1) {
            const response = JsonResponse.response("Request Failure", false, {})
            return res.status(404).json(response)
        }
        const response = JsonResponse.response("Request Successfully", true, result[0])

        return res.status(200).json(response)
    })    

module.exports = router
