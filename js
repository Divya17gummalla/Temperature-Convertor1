function convertToCelsius() {
  const celsiusInput = document.getElementById("celsius");
  const resultElement = document.getElementById("result");

  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  resultElement.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius");
  const resultElement = document.getElementById("result");

  const fahrenheit = parseFloat(celsiusInput.value);
  if (isNaN(fahrenheit)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const celsius = (fahrenheit - 32) * 5/9;
  resultElement.textContent = `${fahrenheit.toFixed(2)}°F is ${celsius.toFixed(2)}°C`;
}
