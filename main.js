// ==============================
// RULES BUTTON OPEN
// ==============================

const rulesButton = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");
const siteBody = document.querySelector("body");
const siteMain = document.querySelector("main");

rulesButton.addEventListener("click", () => {
  if (!rulesContainer.classList.contains("active")) {
    rulesContainer.classList.add("active");
    siteBody.classList.add("rules-active");
    siteMain.classList.add("rules-active");
  }
});

// ==============================
// RULES BUTTON CLOSE
// ==============================

const closeButton = document.getElementById("close-btn");

closeButton.addEventListener("click", () => {
  if (rulesContainer.classList.contains("active")) {
    rulesContainer.classList.remove("active");
    siteBody.classList.remove("rules-active");
    siteMain.classList.remove("rules-active");
  }
});

// click anywhere outside of rules to close rules container
const bgOverlay = document.getElementById("background-overlay");

document.onclick = function (e) {
  if (e.target == bgOverlay) {
    closeButton.click();
  }
};

// ==============================
// HAND PICK FUNCTIONS
// ==============================

let handButtons = document.querySelectorAll(".hand-button");
const siteSection = document.querySelector(".site-section");
const resultSection = document.querySelector(".result-section");
const playerPick = document.getElementById("player-pick");
const housePick = document.getElementById("house-pick");
const resultText = document.getElementById("result-text");
const scoreNumber = document.getElementById("score-number");
let score = 0;

// main function for player and house
handButtons.forEach((handButton) => {
  handButton.addEventListener("click", () => {
    siteSection.classList.add("result");
    resultSection.classList.add("result");

    let playerPickHand = handButton.cloneNode(true);
    playerPick.appendChild(playerPickHand);

    handButtonsStyles();
    getRandomHand();

    if ((handButton.id == "paper" && houseHandPick == "scissors") || (handButton.id == "scissors" && houseHandPick == "rock") || (handButton.id == "rock" && houseHandPick == "paper")) {
      resultText.textContent = "YOU LOOSE";
      housePick.classList.add("winner");
      score -= 1;
      scoreNumber.textContent = score;
    } else if (handButton.id == houseHandPick) {
      resultText.textContent = "DRAW";
    } else {
      resultText.textContent = "YOU WIN";
      playerPick.classList.add("winner");
      score += 1;
      scoreNumber.textContent = score;
    }
  });
});

// removes or adds styles to picked player and house hands
function handButtonsStyles() {
  handButtons = document.querySelectorAll(".hand-button");
  handButtons.forEach((handButton) => {
    if (!handButton.classList.contains("result")) {
      handButton.classList.add("result");
    } else {
      handButton.classList.remove("result");
    }
  });
}

// play again button reset
const playAgainButton = document.getElementById("play-again-btn");

playAgainButton.addEventListener("click", () => {
  handButtonsStyles();

  if (playerPick.classList.contains("winner")) {
    playerPick.classList.remove("winner");
  } else if (housePick.classList.contains("winner")) {
    housePick.classList.remove("winner");
  }

  siteSection.classList.remove("result");
  resultSection.classList.remove("result");
  playerPick.removeChild(playerPick.lastChild);
  housePick.removeChild(housePick.lastChild);
});

// house random hand picker function
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const handTypes = ["paper", "scissors", "rock"];
let houseHandPick = "";
let houseHand = "";

function getRandomHand() {
  houseHandPick = handTypes[Math.floor(Math.random() * handTypes.length)];

  if (houseHandPick == "paper") {
    houseHand = paper.cloneNode(true);
    housePick.appendChild(houseHand);
  } else if (houseHandPick == "scissors") {
    houseHand = scissors.cloneNode(true);
    housePick.appendChild(houseHand);
  } else {
    houseHand = rock.cloneNode(true);
    housePick.appendChild(houseHand);
  }
}
