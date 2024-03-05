import express from 'express'
import userRoute from './routes/userRoute';
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    })
);

app.use('/',userRoute)

export default app