import express from 'express'
import { decode, encode, format } from '../controller/controller.js'


export const router = express.Router()


router
.post('/format', format)
.post('/encode', encode)
.post('/decode', decode);