const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset-btn");
const topCounter = document.querySelector(".counterResults");
const saveResult = document.getElementById("top-result");

let result = [];
let counter = 0;

topCounter.innerHTML = counter;

increaseBtn.addEventListener("click", increaseScore);
saveBtn.addEventListener("click", saveScore);
decreaseBtn.addEventListener("click", decreaseScore);
resetBtn.addEventListener("click", resetScore);

function increaseScore() {
  counter++;
  topCounter.innerHTML = counter;
}

function resetScore() {
  result = [];
  saveResult.innerHTML = "Result: ";
  topCounter.innerHTML = 0;
  counter.innerHMTL = counter;
  updateColor();
}

function decreaseScore() {
  counter--;
  topCounter.innerHTML = counter;
}

function saveScore() {
  if (!result.includes(counter)) {
    result.push(counter);
  }
  saveResult.innerHTML = "Result: " + result.join(", ");
}

function updateColorWithScore() {
  const scoreContainer = document.getElementById("button-container");
  if (counter > 4) {
    scoreContainer.style.backgroundColor = "#F46036";
  }
}
