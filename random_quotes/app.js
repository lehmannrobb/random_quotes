// Declare Vars
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const button = document.querySelector('button');

let currentQuote = '';
let currentAuthor = '';

window.onload = function() { getRandomQuotes() }

// Add Event Listener
button.addEventListener('click', getRandomQuotes);

// Get Random Quotes Function
function getRandomQuotes() {
   fetch(API)
   .then(function(res) {
      return res.json();
   })
   .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      displayQuote( data['quotes'][randomIndex] );
   })
   .catch(function(err) {
      console.log(err);
   })
}

function displayQuote( quote ) {
   document.getElementById('text').className = 'wise';
   document.getElementById('text').textContent = quote.quote;
   document.getElementById('author').textContent = `-${quote.author}`;
}


