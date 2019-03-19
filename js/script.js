document.getElementById('loadQuote').addEventListener("click", printQuoteAndChangeBackgroundColor, false);
function getRandomQuote() {
    var upperLimit = quotes.length;
    console.log("upperLimit", upperLimit);
    var randNum = Math.floor(Math.random() * upperLimit);
    console.log("randNum", randNum);
    return quotes[randNum];
}


function printQuote() {
    var randQuote = getRandomQuote();
    console.log(randQuote);
    var message = '<p class="quote">' + randQuote.quote + '</p>';
    message += '<p class="source">' + randQuote.source;

    if (randQuote.citation && randQuote.year) {
        message += '<span class="citation"> ' + randQuote.citation + '</span>';
        message += '<span class="year"> ' + randQuote.year + '</span></p>';
    } else if (randQuote.citation) {
        message += '<span class="citation"> ' + randQuote.citation + '</span></p>';
    } else if (randQuote.year) {
        message += '<span class="year"> ' + randQuote.year + '</span></p>';
    }

    console.log(message);
    document.getElementById('quote-box').innerHTML = message;

}
// Change the background color (& button color) when a new quote is printed
function printQuoteAndChangeBackgroundColor() {
    printQuote();
    var newBackgroundColor = "rgb(" + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ")";
    console.log(newBackgroundColor);
    document.body.style.backgroundColor = newBackgroundColor;
    document.getElementById("loadQuote").style.background = newBackgroundColor;

}

printQuoteAndChangeBackgroundColor();

// Refresh the quote after 10 seconds
function refreshQuote() {
    var quoteRefresh = window.setInterval(printQuoteAndChangeBackgroundColor, 10000);
}

refreshQuote();
