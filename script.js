function calculateBasic() {
    let percent = parseFloat(document.getElementById("percent1").value);
    let number = parseFloat(document.getElementById("number1").value);

    if (isNaN(percent) || isNaN(number)) {
        document.getElementById("result1").innerText = "Please enter valid numbers.";
        return;
    }

    let result = (percent / 100) * number;
    document.getElementById("result1").innerText = percent + "% of " + number + " is " + result.toFixed(2);
}

function calculateIncrease() {
    let original = parseFloat(document.getElementById("increaseOriginal").value);
    let newValue = parseFloat(document.getElementById("increaseNew").value);

    if (isNaN(original) || isNaN(newValue) || original === 0) {
        document.getElementById("result2").innerText = "Please enter valid numbers.";
        return;
    }

    let increase = ((newValue - original) / original) * 100;
    document.getElementById("result2").innerText = "Increase: " + increase.toFixed(2) + "%";
}

function calculateDecrease() {
    let original = parseFloat(document.getElementById("decreaseOriginal").value);
    let newValue = parseFloat(document.getElementById("decreaseNew").value);

    if (isNaN(original) || isNaN(newValue) || original === 0) {
        document.getElementById("result3").innerText = "Please enter valid numbers.";
        return;
    }

    let decrease = ((original - newValue) / original) * 100;
    document.getElementById("result3").innerText = "Decrease: " + decrease.toFixed(2) + "%";
