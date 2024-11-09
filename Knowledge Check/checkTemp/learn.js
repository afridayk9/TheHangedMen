//oscar

/*
* checkTemp() takes in temp and displays a message based on the value. 
*/

function checkTemp() {
  let temp = document.getElementById("tempInput").value;  // Get value from input
  temp = Number(temp);  // Convert the input to a number
  let message = "";

  // Check if the input is a valid number using NotaNumber
  if (!isNaN(temp)) {
    if (temp < 40) {
      message = "It's cold outside.";
    } else if (temp >= 40 && temp <= 64) {
      message = "It's cool outside.";
    } else if (temp >= 65 && temp <= 85) {
      message = "It's warm outside.";
    } else {
      message = "It's very hot outside!";
    }
  } else {
    message = "Please enter a valid temperature.";
  }

  document.getElementById("result").innerText = message;
}  

/*
* closeWindow() allows the user to exit by closing the browser window
*/

function closeWindow(){
  window.close();
}