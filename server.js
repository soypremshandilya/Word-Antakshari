const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const wordsRouter = require("./routes/words.js")

const app = express()
app.use(express.json())

app.use(cors())

mongoose
    .connect("mongodb://127.0.0.1:27017/antakshari")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err))

app.use(wordsRouter)

const port = 5000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})