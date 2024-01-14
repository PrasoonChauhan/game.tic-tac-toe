let boxes = document.querySelectorAll(".btn");
let resetBtnElement = document.querySelector(".resetBtn");
let newBtnElement = document.querySelector(".new-btn");
let msgContainerElement = document.querySelector(".msgContainer");
let msgElement = document.querySelector(".msg");
let main = document.querySelector("main");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      // box.style.color = "green";
      box.innerText = "X";
      turnO = true;
    }
    count++;
    console.log(count);
    box.disabled = true;
    checkWinner();
  });
});

let showWinner = (winner) => {
  disable();
  msgElement.innerText = `Congratulations! Winner is ${winner}`;
  msgContainerElement.classList.remove("hide");
  main.style.display = "none";
};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
  if (count === 9)
  {
   draw();
  }
};

newBtnElement.addEventListener("click", () => {
  reset();
});
resetBtnElement.addEventListener("click", () => {
  reset();
});

let disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
let reset = () => {
  msgContainerElement.classList.add("hide");
  main.style.display = "block";
  enable();
  turnO = true;
  count = 0;
};
let draw = () =>
{
   msgElement.innerText = `It's  Draw`;
   msgContainerElement.classList.remove("hide");
   main.style.display = "none";
}
