import express from 'express'
import router from './routers/company.routes'
import './db-connection'
const app = express()
const PORT = process.env.PORT || 3000

// <----------------------------Company Routes ---------------------------->

app.use('/company', router)
// <-----------------------------End of Company Routes -------------------->

app.listen(PORT, () => {
    console.log(`I am Listening on PORT ${PORT}`)
})