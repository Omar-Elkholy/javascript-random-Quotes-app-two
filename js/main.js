
var quote = document.getElementById("quote");
var author = document.getElementById("author");

var _quote = [
    {
        "quote": "“Be yourself; everyone else is already taken.”",
        "author": "― Oscar Wilde",
    },

    {
        "quote": "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "author": "― Albert Einstein",
    },
    
    {
        "quote": "“So many books, so little time.”",

        "author": "― Frank Zappa",
    },

    {
        "quote": "“A room without books is like a body without a soul.”",
        "author": "― Marcus Tullius Cicero",
    },

    {
        "quote": "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "author": "― Bernard M. Baruch",
    },

    {
        "quote": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "author": "― Dr. Seuss",
    },

    {
        "quote": "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        "author": "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    },

    {
        "quote": "“If you tell the truth, you don't have to remember anything.”",
        "author": "― Mark Twain",
    },

    {
        "quote": "“A friend is someone who knows all about you and still loves you.”",
        "author": "― Elbert Hubbard",
    },

    {
        "quote": "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        "author": "― Ralph Waldo Emerson"
    },
    
]



var length = _quote.length;

function newQuote() {
    var randomNum = Math.floor(Math.random() * length);
    quote.innerHTML = _quote[randomNum].quote;
    author.innerHTML = _quote[randomNum].author;
}

