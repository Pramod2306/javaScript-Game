document.addEventListener("DOMContentLoaded", () => {
  //card Options

  const CardArray = [
    {
      name: "basketball",
      img: "images/Basketball.jpeg",
    },
    {
      name: "cake",
      img: "images/cake.png",
    },
    {
      name: "pie",
      img: "images/pie.jpg",
    },
    {
      name: "football",
      img: "images/Football.png",
    },
    {
      name: "basketball",
      img: "images/Basketball.jpeg",
    },
    {
      name: "cake",
      img: "images/cake.png",
    },
    {
      name: "pie",
      img: "images/pie.jpg",
    },
    {
      name: "football",
      img: "images/Football.png",
    },
  ];

  const resultDisplayStyle = [
    {
      backgroundcolor: "green",
      display: "block",
    },
    {
      backgroundcolor: "red",
      display: "block",
    },
    {
      backgroundcolor: "yellow",
      display: "block",
    },
  ];
  CardArray.sort(() => 0.5 - Math.random());
  let score = document.getElementById("hitpoint");
  let lose = document.getElementById("misspoint");
  const grid = document.querySelector(".grid");
  const popup = document.querySelector(".popup");
  const result = document.querySelector("#result");
  const reset = document.querySelector("#reset");
  let cardsChoosen = [];
  let cardChosenId = [];
  let cardsWon = [];
  let missPoint = 0;
  let hitpoint = 0;
  console.log(popup);
  //check for match card
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardsChoosen[0] == cardsChoosen[1]) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].setAttribute("style", "pointer-events:none");
      cards[optionTwoId].setAttribute("style", "pointer-events:none");
      cardsWon.push(cardsChoosen);
      hitpoint++;
      score.innerHTML = hitpoint;
    } else {
      cards[optionOneId].setAttribute("src", "images/cover.png");
      cards[optionTwoId].setAttribute("src", "images/cover.png");
      cards[optionOneId].setAttribute("style", "pointer-events:auto");
      cards[optionTwoId].setAttribute("style", "pointer-events:auto");
      missPoint++;
      console.log("misspoint=", missPoint);
      lose.innerHTML = missPoint;
    }
    cardChosenId = [];
    cardsChoosen = [];

    if (cardsWon.length === CardArray.length / 2) {
      if (hitpoint > missPoint) {
        popup.style.backgroundColor = "green";
        popup.style.display = "block";
        result.innerHTML = "You Win";
      } else if (missPoint > hitpoint) {
        popup.style.display = "block";
        popup.style.backgroundColor = "red";
        result.innerHTML = "opps you Lose Try Agian";
      } else {
        popup.style.display = "block";
        popup.style.backgroundColor = "yellow";
        result.innerHTML = "Draw";
      }
    }
  }

  //flip card

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChoosen.push(CardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", CardArray[cardId].img);
    this.setAttribute("style", "pointer-events:none");
    if (cardsChoosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  //create board

  function createBoard() {
    for (let i = 0; i < CardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/cover.png");
      card.setAttribute("class", "itemholder");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //match reload
  reset.addEventListener("click", (event) => {
    event.preventDefault();
    location.reload();
  });

  createBoard();
});
