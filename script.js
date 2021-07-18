const quoteContainer = document.getElementById('quote-Container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const messengerBtn = document.getElementById('messenger');
const newQuoteBtn = document.getElementById('nQuote');
const loader = document.getElementById('loader');

// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// function complete(){
//     if(!loader.hidden){
//         loader.hidden=true;
//         quoteContainer.hidden = false;
//     }
// }
//Get quote from API
function newQuote(){
    //loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    //to check the author field is blank or not
    if(!quote.author){
        authorText.textContent = 'unknown';
    }
    else{
        authorText.textContent = quote.author;
    }
    //checking for the quote length
    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    //set quote, hide loader
    quoteText.textContent = quote.text;
    //complete();
}

//Messageing quotes
function messageQuote(){
    const messagengerUrl = `https://www.messenger.com/t/`;
    window.open(messagengerUrl, '_blank')
}

//Event Lintener
newQuoteBtn.addEventListener('click',newQuote);
messengerBtn.addEventListener('click',messageQuote);


//On load
newQuote();
