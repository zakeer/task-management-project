import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import TaskRoute from './routes/TaskRoute.js'
import UserRoute from './routes/UserRoute.js'
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(TaskRoute)
app.use(UserRoute)




app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
