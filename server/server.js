const myexpress = require('express')
const dotenv = require('dotenv')
const form = require('./routes/form')
const connectDB = require('./config/db')

dotenv.config({path : './config/config.env'})
connectDB()

const app = myexpress()
app.use(myexpress.json())
app.use('/api/form', form)


const PORT = process.env.PORT || 6000

app.listen(PORT, (req, res)=>{
    console.log('Server is Running');

})