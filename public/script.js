const currentWordDisplay = document.getElementById('current-word')
const wordInput = document.getElementById('word-input')
const submitWordButton = document.getElementById('submit-word')
const messageDisplay = document.getElementById('message')
const scoreDisplay = document.getElementById('score')

let score = 0
let previousWord = ''

async function startGame() {
    const response = await fetch('http://localhost:5000/api/start')
    const data = await response.json()
    currentWordDisplay.textContent = data.word
    previousWord = data.word
    scoreDisplay.textContent = score
    wordInput.focus()
}


async function validateWord(word) {
    const response = await fetch('http://localhost:5000/api/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ word: word, previousWord: previousWord })
    })

    if (!response.ok) {
        const error = await response.json()
        messageDisplay.textContent = error.error || 'An error occurred'
        return
    }

    const data = await response.json()
    return data
}

submitWordButton.addEventListener('click', async () => {
    const word = wordInput.value.trim()
    if (!word) {
        messageDisplay.textContent = 'Please enter a word.'
        return
    }

    const result = await validateWord(word)

    if (result.valid) {
        messageDisplay.textContent = 'Correct!'
        scoreDisplay.textContent = score += word.length
        currentWordDisplay.textContent = result.nextWord
        previousWord = result.nextWord
    } else {
        messageDisplay.textContent = result.message
    }
    wordInput.value = ''
    wordInput.focus()
})


wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitWordButton.click()
    }
})

startGame()