import express from 'express'
import { router } from './router/router.js'
import cors from 'cors'



const app = express()
app.use(cors({
  origin : "https://tech-play-frontend.vercel.app"}
  ))
app.use(express.json())
app.use('/', router)



app.listen(5000, () => {
  console.log('server is running on port 5000')
})
