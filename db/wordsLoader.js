const fs = require('fs')
const Word = require('../model/Word.js')

fs.readFile('words_alpha.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const words = data.split('\n')

    try {
        for (const word of words) {
            const newWord = new Word({ word: word.trim() })
            await newWord.save()
        }
        console.log('Database populated successfully!')
    } catch (error) {
        console.error('Error populating database:', error)
    }
})