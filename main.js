const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset-btn");
const topCounter = document.querySelector(".counterResults");
const saveResult = document.getElementById("top-result");
let main = document.querySelector(".main");
let result = [];
let counter = 0;

topCounter.innerHTML = counter;

increaseBtn.addEventListener("click", increaseScore);
saveBtn.addEventListener("click", saveScore);
decreaseBtn.addEventListener("click", decreaseScore);
resetBtn.addEventListener("click", resetScore);

function updateColorWithScore() {
  console.log("in the function");
  const scoreContainer = document.getElementById("button-container");
  if (counter > 4) {
    main.style.backgroundColor = "#16BAC5";
  } else if (counter == 0) {
    main.style.backgroundColor = "#e0e0e2";
  } else if (counter > 0 && counter < 5) {
    main.style.backgroundColor = "#642CA9";
  } else if (counter < 0) {
    main.style.backgroundColor = "#FF36AB";
  }
}

function increaseScore() {
  counter++;
  topCounter.innerHTML = counter;
  updateColorWithScore();
}

function resetScore() {
  result = [];
  counter = 0;
  saveResult.innerHTML = "Result: ";
  topCounter.innerHTML = 0;
  counter.innerHMTL = counter;
  updateColorWithScore();
}

function decreaseScore() {
  counter--;
  topCounter.innerHTML = counter;
  updateColorWithScore();
}

function saveScore() {
  if (!result.includes(counter)) {
    result.push(counter);
  }
  saveResult.innerHTML = "Result: " + result.join(", ");
}
