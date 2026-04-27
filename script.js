let handL = document.querySelectorAll(".hand-L");
let handR = document.querySelectorAll(".hand-R");

handL.forEach((hand) => {
  hand.classList.add("hidden");
});
handR.forEach((hand) => {
  hand.classList.add("hidden");
});

let buttons = document.querySelectorAll(".img");

const reset = (player, computer) => {
  document.querySelector(".next").classList.add("hidden");
  let selector = document.querySelector(".selector");
  selector.classList.remove("hidden");
  let rightHandWon = document.querySelector(`#r${computer}`);
  let leftHandWon = document.querySelector(`#l${player}`);
  rightHandWon.classList.add("hidden");
  leftHandWon.classList.add("hidden");
  document.querySelector(".text").innerHTML =
    "Select among rock, paper and scissors";
  document.querySelector(".you").innerHTML = "0";
  document.querySelector(".robot").innerHTML = "0";
};

const newRound = (player, computer) => {
  document.querySelector(".next").classList.add("hidden");
  let selector = document.querySelector(".selector");
  selector.classList.remove("hidden");
  let rightHandWon = document.querySelector(`#r${computer}`);
  let leftHandWon = document.querySelector(`#l${player}`);
  rightHandWon.classList.add("hidden");
  leftHandWon.classList.add("hidden");
  document.querySelector(".text").innerHTML =
    "Select among rock, paper and scissors";
};

const randomNo = () => Math.floor(Math.random() * 3);

const Winner = (player, computer) => {
  if (player === computer) {
    return -1;
  } else {
    if (
      (player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)
    ) {
      return 1;
    } else {
      return 0;
    }
  }
};

const score = (decision) => {
  let player_score = document.querySelector(".you");
  let computer_score = document.querySelector(".robot");
  if (decision === 1) {
    player_score.innerHTML = parseInt(player_score.innerHTML) + 1;
  } else if (decision === 0) {
    computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
  }
};

const HandAction = (player, computer) => {
  let rightHand = document.querySelector(`#r0`);
  let leftHand = document.querySelector(`#l0`);
  let rightHandWon = document.querySelector(`#r${computer}`);
  let leftHandWon = document.querySelector(`#l${player}`);
  rightHand.classList.remove("hidden");
  rightHand.classList.add("animate-R");
  leftHand.classList.remove("hidden");
  leftHand.classList.add("animate-L");
  setTimeout(() => {
    rightHand.classList.remove("animate-R");
    leftHand.classList.remove("animate-L");
    rightHand.classList.add("hidden");
    leftHand.classList.add("hidden");
    rightHandWon.classList.remove("hidden");
    leftHandWon.classList.remove("hidden");
  }, 1900);
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelector(".next").classList.add("hidden");

    document.querySelector(".selector").classList.add("hidden");
    let player_choice = index;
    console.log(player_choice);
    let computer_choice = randomNo();
    console.log(computer_choice);
    let decision = Winner(player_choice, computer_choice);
    document.querySelector(".text").innerHTML = "Rock Paper Scissors Shoot!";
    setTimeout(() => {
      if (decision === -1) {
        console.log("Tie");
        document.querySelector(".text").innerHTML = "Tie!";
      } else if (decision === 0) {
        console.log("Lost");
        document.querySelector(".text").innerHTML = "You lost!";
      } else {
        console.log("Won");
        document.querySelector(".text").innerHTML = "You won!";
      }
    }, 2000);

    HandAction(player_choice, computer_choice);

    setTimeout(() => {
      document.querySelector(".next").classList.remove("hidden");
      score(decision);
    }, 2000);

    document.querySelector(".next").addEventListener("click", () => {
      newRound(player_choice, computer_choice);
    });
    document.querySelector(".reset").addEventListener("click", () => {
      reset(player_choice, computer_choice);
    });
  });
});
