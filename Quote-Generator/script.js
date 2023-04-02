const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }   
}

//Get Quote from API
let i=0;
// async function getQuote(){
//     loading();
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//     const apiUrl = 'http://api.forismatic.com/api/1.0/?methot=getQoute&lang=en&format=json';
//     try{
//         const response = await fetch(proxyUrl + apiUrl)
//         const data = await response.json();
//         if(data.QuoteAuthor === ''){
//             authorText.textContent = 'Unknown';
//         } else{
//             authorText.textContent = data.quoteAuthor;
//         }
//         if(data.quoteText.length > 120){
//             quoteText.classList.add('long-quote')
//         }else{
//             quoteText.classList.remove('long-quote')
//         }
//         quoteText.innerHTML = data.quoteText;
//         //Stop loading, show Quote
//         complete();
    
//     } catch (error) {
//         getQuote();
//         console.log('Whoops, no quote', error);
//     }
// }

async function getQuote(){
    loading();
    try{
        fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data[i].text === ''){
            authorText.textContent = 'Unknown';
        } else{
            authorText.textContent = data[i].author;
        }
        if(data[i].text.length > 120){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerHTML = data[i].text;
        console.log(data[i]);
        i++;
        complete();
    });
    }
    catch(error){
        getQuote();
    console.log(error);
    }
}

//Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerHTML;
    const author = authorText.innerHTML;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl , '_blank')
}

//Event Linseners
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)

//On Load
getQuote();
// loading()
