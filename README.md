# Word Antakshari

A fun web-based word game where players respond with words that start with the last letter of the previous word.

## Description

Word Antakshari is an interactive web game based on the traditional game concept of "Antakshari," but with words instead of songs. The game provides a starting word, and you need to enter a valid word that begins with the last letter of the previous word. Your score increases based on the length of each valid word you submit.

## Features

- Dynamic word validation against a dictionary
- Real-time score tracking
- Responsive design for various screen sizes
- MongoDB integration for word storage and retrieval

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- A text file named `words_alpha.txt` containing a list of English words (one word per line)

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd Word-Antakshari
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure MongoDB:
   - Make sure MongoDB is running on `mongodb://127.0.0.1:27017/`
   - The application will automatically create a database named `antakshari`

4. Load the dictionary:
   - Place the `words_alpha.txt` file in the project root
   - Run the words loader script:
     ```
     node db/wordsLoader.js
     ```

## Starting the Application

1. Start the server:
   ```
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## How to Play

1. The game starts by displaying a random word
2. Enter a word that begins with the last letter of the displayed word
3. Submit your answer by clicking the "Submit" button or pressing Enter
4. If your word is valid, you'll receive points equal to the length of your word
5. The game will provide a new word, and the process continues

## Game Rules

- Each word must start with the last letter of the previous word
- Words must exist in the English dictionary
- Each valid word increases your score

## Project Structure

- `server.js` - Main server file
- `model/Word.js` - MongoDB schema definition
- `db/wordsLoader.js` - Script to populate the database with words
- `routes/words.js` - API routes for game logic
- `public/` - Frontend files (HTML, CSS, JavaScript)

## Technologies Used

- Backend: Node.js, Express.js, MongoDB, Mongoose
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Additional: CORS for cross-origin requests

## Screenshots

### Game Interface
![Game Interface](screenshots/screenshot1.png)
*The main game screen showing the current word, input field, and score counter.*

### Valid Word Submission
![Valid Word](screenshots/screenshot2.png)
*Feedback when a valid word is submitted.*

### Invalid Word Submission
![Invalid Word](screenshots/screenshot3.png)
*Error message when an invalid word is submitted.*

---