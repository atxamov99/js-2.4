const counterValue = document.getElementById("counterValue");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const colorButton = document.getElementById("colorButton");
const colorPicker = document.getElementById("colorPicker");
const numberInput = document.getElementById("numberInput");
const sendBtn = document.getElementById("sendBtn");

let counter = 0;

// Increment Counter
incrementButton.addEventListener("click", () => {
  counter++;
  updateCounter();
  incrementButton.style.backgroundColor = "green"; // Green background on plus click
  decrementButton.style.backgroundColor = ""; // Reset minus button background
});

// Decrement Counter
decrementButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  updateCounter();
  decrementButton.style.backgroundColor = "red"; // Red background on minus click
  incrementButton.style.backgroundColor = ""; // Reset plus button background
});

// Update Counter Value
function updateCounter() {
  counterValue.textContent = counter;
}

// Open Color Picker
colorButton.addEventListener("click", () => {
  colorPicker.click();
});

// Change Colors
colorPicker.addEventListener("input", (event) => {
  const selectedColor = event.target.value;

  // Update button color
  colorButton.style.backgroundColor = selectedColor;

  // Update counter text color
  counterValue.style.color = selectedColor;

  // Update increment and decrement button backgrounds
  incrementButton.style.backgroundColor = selectedColor;
  decrementButton.style.backgroundColor = selectedColor;
});

// Add input value to counter when Send button is clicked
sendBtn.addEventListener("click", () => {
  const inputValue = parseInt(numberInput.value, 10);
  if (!isNaN(inputValue)) {
    counter += inputValue; // Add input value to counter
    updateCounter();
    numberInput.value = ""; // Clear the input field
  }
});
