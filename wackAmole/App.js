document.addEventListener("DOMContentLoaded", () => {
  const mole = document.querySelectorAll(".mole");
  const square = document.querySelectorAll(".square");
  let score = document.querySelector("#score");
  const timeLeft = document.querySelector("#timer");
  let finalResult = document.querySelector("#finalResult");
  const popup = document.querySelector(".popup");
  const reset = document.querySelector("#reset");
  let level = document.querySelector("#level");
  let timerId;
  let timeCounter;
  let result = 0;
  let currentTime = timeLeft.textContent;
  let hitPosition;
  //selecting random square in grid

  function randomSquare() {
    square.forEach((className) => {
      className.classList.remove("mole");
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
  }

  square.forEach((id) => {
    id.addEventListener("mouseup", () => {
      if (id.id === hitPosition) {
        result++;
      }
      score.textContent = result;
    });
  });

  //mole movment

  function moleMovment(speed) {
    timerId = setInterval(randomSquare, speed);
  }

  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime <= 0) {
      clearInterval(timerId);
      clearInterval(timeCounter);
      popup.setAttribute("style", "display:block");
      finalResult.textContent = result;
    }
    console.log("Current", currentTime);
  }

  reset.addEventListener("click", () => {
    event.preventDefault();
    location.reload();
  });

  //level selector
  level.addEventListener("change", () => {
    event.preventDefault();

    if (level.value === "0") {
      location.reload();
    }
    clearInterval(timeCounter);
    clearInterval(timerId);
    currentTime = 60;
    score.textContent = 0;
    timeCounter = setInterval(countDown, 1000);
    console.log(level.value);
    moleMovment(level.value);
  });
});
