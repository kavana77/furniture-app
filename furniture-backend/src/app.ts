import express from "express"
import "dotenv/config"
import signupRoutes from "./routes/signupRoutes"

const app = express()
app.use(express.json())

app.use('/api', signupRoutes)

export default app