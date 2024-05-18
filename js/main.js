var quotes = [
    {
        author: 'Epictetus',
        quote: "It's not what happens to you, but how you react to it that matters."
    },
    {
        author: 'Wayne Gretzy',
        quote: "You miss 100% of the shots you don't take."
    },
    {
        author: 'Frank Sinatra',
        quote: "The best revenge is massive success."
    },
    {
        author: 'Elbert Hubbard',
        quote: "Do not take life too seriously. You will not get out alive."
    },
    {
        author: 'Nelson Mandela',
        quote: "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
        author: 'Albert Einstein',
        quote: "Imagination is more important than knowledge"
    },
    {
        author: 'Winston Churchill',
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        author: 'Maya Angelou',
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        author: 'Mark Twain',
        quote: "The secret of getting ahead is getting started."
    },
    {
        author: 'Oscar Wilde',
        quote: "Be yourself; everyone else is already taken."
    },
    {
        author: 'Albert Camus',
        quote: "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
    },
    {
        author: 'Ralph Waldo Emerson',
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
    {
        author: 'Henry Ford',
        quote: "Whether you think you can or you think you can't, you're right."
    },
    {
        author: 'Confucius',
        quote: "Our greatest glory is not in never falling, but in rising every time we fall."
    },
    {
        author: 'Aristotle',
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
        author: 'Buddha',
        quote: "The mind is everything. What you think you become."
    },
    {
        author: 'Lao Tzu',
        quote: "The journey of a thousand miles begins with one step."
    },
]

var storedQuotes = localStorage.getItem('quotes');
var quoteText = document.getElementById('quote');
var authorText = document.getElementById('author');
var quoteContainer = document.getElementById('quoteContainer');
localStorage.setItem('quotes', JSON.stringify(quotes));

var lastIndex = -1;

function chooseRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    lastIndex = randomIndex;
    return quotes[randomIndex];
}


function showQuote() {
    var quote = chooseRandomQuote();
    quoteText.innerHTML = quote.quote;
    authorText.innerHTML = '<span class="fst-italic">by: </span>' + quote.author;
}