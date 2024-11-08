//This is a statemnt, a piece of code that expresses an action to be carried out. 
console.log('Hello World');

let firstName = 'Tony';
let lastName = 'Friday';
console.log(firstName, lastName);

///This function takes in a user defined int and compares it a range of values to determine the output to be displayed as an overlay on an image.
function checkTemp() {
    const temp = document.getElementById('currentTemp').value;
    let message = '';

    if (temp <= 0) {
        message = 'It\'s way too cold! You should probably just move';
    } else if (temp > 0 && temp <= 25) {
        message = 'It\'s freezing! Stay home';
    } else if (temp > 25 && temp <= 40) {
        message = 'It\'s  a bit cold! Bundle up';
    } else if (temp > 40 && temp <= 50) {
        message = 'It\'s kind of cold! Grab a warm jacket';
    } else if (temp > 50 && temp <= 60) {
        message = 'It\'s cool! A hoodie will do.';
    } else if ( temp > 60 && temp <= 70) {
        message = 'It\'s chilly! Maybe a long sleeve shirt.';
    } else {
        message = 'It\'s finally warm again! Get a t-shirt';
    }

    //This 'output' was used to for debugging purposes while I was manipulating the overlayText position over the image.
    //document.getElementById('output').innerText = message;
    document.getElementById('overlayText').innerText = message;
}