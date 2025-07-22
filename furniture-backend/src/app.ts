import express from "express"
import "dotenv/config"
import cors from 'cors'
import signupRoutes from "./routes/signupRoutes"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', signupRoutes)

export default app