require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const noteRouter = require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/notes', noteRouter)

app.get('/', (req, res) =>{
    res.json("Hello Everyone, this is my notes app" )
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

//Connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {}//, err => {
   // if (err) throw err;
    //console.log('Connected to MongoDB')
//}
)