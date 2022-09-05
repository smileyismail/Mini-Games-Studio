let scoreCount = document.getElementById("score");
let message = document.getElementById("message");
let cardsContainer = document.getElementById("cards_container");
let playAgainBtn = document.getElementById("play_again");

// init Variables and Data

let cardsData = [
  { id: 1, name: "bootstrap", img: "assets/cards/bootstrap.png" },
  { id: 2, name: "css", img: "assets/cards/css.png" },
  { id: 3, name: "html", img: "assets/cards/html.png" },
  { id: 4, name: "java", img: "assets/cards/java.png" },
  { id: 5, name: "js", img: "assets/cards/js.png" },
  { id: 6, name: "python", img: "assets/cards/python.png" },
  { id: 7, name: "react", img: "assets/cards/react.png" },
  { id: 8, name: "smiley", img: "assets/cards/smiley.png" },
  { id: 9, name: "bootstrap", img: "assets/cards/bootstrap.png" },
  { id: 10, name: "css", img: "assets/cards/css.png" },
  { id: 11, name: "html", img: "assets/cards/html.png" },
  { id: 12, name: "java", img: "assets/cards/java.png" },
  { id: 13, name: "js", img: "assets/cards/js.png" },
  { id: 14, name: "python", img: "assets/cards/python.png" },
  { id: 15, name: "react", img: "assets/cards/react.png" },
  { id: 16, name: "smiley", img: "assets/cards/smiley.png" },
];

let selectedCards = [];
let selectedCardsIds = [];
let score = 0;

cardsData.sort(() => 0.5 - Math.random());
console.log(cardsData);

function arrangeCards() {
  cardsData.forEach((cardData, index) => {
    let card = document.createElement("img");
    card.setAttribute("src", "assets/cards/reversed.png");
    card.setAttribute("class", "image");
    card.setAttribute("id", index);
    card.addEventListener("click", flipCard);
    cardsContainer.appendChild(card);
  });
  // for (i = 0; i < cardsData.length; i++) {
  //   let card = document.createElement("img");
  //   card.setAttribute("src", "cards/reversed.png");
  //   card.setAttribute("class", "image");
  //   card.setAttribute("id", i);
  //   card.addEventListener("click", flipCard);
  //   cardsContainer.appendChild(card);
  // }

  function flipCard() {
    let clickedCardId = this.getAttribute("id");
    selectedCards.push(cardsData[clickedCardId].name);
    selectedCardsIds.push(clickedCardId);
    this.setAttribute("src", cardsData[clickedCardId].img);
    if (selectedCards.length == 2) {
      setTimeout(checkForMatch, 400);
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = selectedCardsIds[0];
    let optionTwoId = selectedCardsIds[1];

    if (optionOneId == optionTwoId) {
      message.innerText = "You Clicked Same Card";
      cards[optionOneId].setAttribute("src", "assets/cards/reversed.png");
      cards[optionTwoId].setAttribute("src", "assets/cards/reversed.png");
    } else if (selectedCards[0] === selectedCards[1]) {
      message.innerText = "Matched";
      console.log(message);
      cards[optionOneId].setAttribute("src", "assets/cards/matched.png");
      cards[optionTwoId].setAttribute("src", "assets/cards/matched.png");
      score++;
      scoreCount.innerText = `Score: ${score}`;
      if (score === 8) {
        message.innerHTML = "<h1>YOU WON</h1>";
        playAgainBtn.style.display = "block";
      }
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
    } else {
      message.innerText = "No Match";
      console.log(message);
      cards[optionTwoId].setAttribute("src", "assets/cards/reversed.png");
      cards[optionOneId].setAttribute("src", "assets/cards/reversed.png");
    }
    selectedCards = [];
    selectedCardsIds = [];
  }
}

arrangeCards();
