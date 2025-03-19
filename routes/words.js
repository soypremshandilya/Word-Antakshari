const express = require("express")
const Word = require("../model/Word.js")

async function getRandomWord() {
    const count = await Word.countDocuments()
    const random = Math.floor(Math.random() * count)
    const word = await Word.findOne().skip(random)
    return word.word
}

const app = express.Router()

app.get('/api/start', async (_, res) => {
    const randomWord = await getRandomWord()
    res.json({ word: randomWord })
})


app.post('/api/validate', async (req, res) => {
    const { word, previousWord } = req.body

    if (!word || !previousWord) {
        return res.status(400).json({ error: 'Word and previous word are required' })
    }

    const lastLetter = previousWord.slice(-1)
    if (word[0].toLowerCase() !== lastLetter.toLowerCase()) {
        return res.json({ valid: false, message: 'Word does not start with the last letter of the previous word' })
    }

    const isValidWord = await Word.findOne({ word: word.toLowerCase() })
    if (!isValidWord) {
        return res.json({ valid: false, message: 'Word does not exist in the dictionary' })
    }

    const nextWord = await getRandomWord()

    res.json({ valid: true, nextWord: nextWord })
})

module.exports = app