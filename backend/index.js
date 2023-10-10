const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

const app = express();

app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('port', process.env.PORT || 3001)

app.use("/api/contact", require("./routes/contact"))

// Database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(app.get('port'), () => {console.log(`Server started on port ${app.get('port')}`)}))
    .catch((error) => console.log(error))