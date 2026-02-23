// =========================
// Percentage Calculator
// =========================
function calculateBasic() {
    const percent = parseFloat(document.getElementById('percent1').value);
    const number = parseFloat(document.getElementById('number1').value);
    if (isNaN(percent) || isNaN(number)) {
        alert("Please enter valid numbers");
        return;
    }
    const result = (percent / 100) * number;
    document.getElementById('result1').innerText = `${percent}% of ${number} is ${result}`;
}

function calculateIncrease() {
    const original = parseFloat(document.getElementById('increaseOriginal').value);
    const newValue = parseFloat(document.getElementById('increaseNew').value);
    if (isNaN(original) || isNaN(newValue)) {
        alert("Please enter valid numbers");
        return;
    }
    const increase = ((newValue - original) / original) * 100;
    document.getElementById('result2').innerText = `Percentage increase: ${increase.toFixed(2)}%`;
}

function calculateDecrease() {
    const original = parseFloat(document.getElementById('decreaseOriginal').value);
    const newValue = parseFloat(document.getElementById('decreaseNew').value);
    if (isNaN(original) || isNaN(newValue)) {
        alert("Please enter valid numbers");
        return;
    }
    const decrease = ((original - newValue) / original) * 100;
    document.getElementById('result3').innerText = `Percentage decrease: ${decrease.toFixed(2)}%`;
}

// =========================
// Age Calculator
// =========================
function calculateAge() {
    const dob = document.getElementById('dob')?.value;
    if (!dob) return alert("Please enter your date of birth");

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('ageResult').innerText =
        `You are ${years} years, ${months} months, and ${days} days old.`;
}

// =========================
// Loan Calculator
// =========================
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount')?.value);
    const interestRate = parseFloat(document.getElementById('interestRate')?.value);
    const loanTerm = parseFloat(document.getElementById('loanTerm')?.value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please fill in all fields with valid numbers");
        return;
    }

    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = (loanAmount * r) / (1 - Math.pow(1 + r, -n));

    document.getElementById('loanResult').innerText =
        `Monthly Payment: £${monthlyPayment.toFixed(2)}`;
}
