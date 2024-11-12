function tempChecker() {
    let tempInput = document.getElementById("input").value;
    let output = document.getElementById("output");

    if (tempInput === "exit") {
        window.close();
    } else {
        let temperature = parseInt(tempInput);

        // Check if the input is a valid number
        if (isNaN(temperature)) {
            output.textContent = "Not a valid input. Please enter a number or type 'exit' to quit.";
            return;
        }

        // Temperature-based messages
        if (temperature >= 66 && temperature <= 85) {
            output.textContent = "It is very hot!";
        } else if (temperature >= 65 && temperature <= 85) {
            output.textContent = "It is warm!";
        } else if (temperature >= 40 && temperature <= 64) {
            output.textContent = "It is cool!";
        } else if (temperature < 40) {
            output.textContent = "It is cold outside!";
        }
    }
}
