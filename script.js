function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, PKR: 278, GBP: 0.73, INR: 83 },
        EUR: { USD: 1.18, EUR: 1, PKR: 328, GBP: 0.86, INR: 97 },
        PKR: { USD: 0.0036, EUR: 0.003, PKR: 1, GBP: 0.0026, INR: 0.29 },
        GBP: { USD: 1.37, EUR: 1.16, PKR: 382, GBP: 1, INR: 113 },
        INR: { USD: 0.012, EUR: 0.010, PKR: 3.34, GBP: 0.0088, INR: 1 }
    };

    if (!amount || amount < 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Conversion Result</h2>
        <p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>
    `;
    resultDiv.style.display = 'block'; // Show result with animation
}
