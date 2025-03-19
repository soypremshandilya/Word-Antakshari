const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
    word: { type: String, unique: true, required: true }
})

const Word = mongoose.model('Word', wordSchema)

module.exports = Word