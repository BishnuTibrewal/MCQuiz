let ccount = 0;
let wcount = 0;

function endGame() {
  document.getElementById("result").innerText =
    "Alass! You have lost the game.";
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("result").style.backgroundColor = "red";
  alert("Sorry You Loose!");
}

function winGame() {
  document.getElementById("result").innerText =
    "Congrats! You have won the game.";
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("result").style.backgroundColor = "green";
  alert("Congrats You win!");
}

for (let i = 0; i < document.getElementsByClassName("options1").length; i++) {
  document
    .getElementsByClassName("options1")
    [i].addEventListener("click", function () {
      if (document.getElementsByClassName("options1")[i].innerText == "1998") {
        document.getElementById("question2").style.visibility = "visible";
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.visibility = "hidden";
        document.getElementById("question1").style.display = "none";
        ccount++;
        alert("Congrats ! You move to the next question");
      } else {
        console.log("error");
        document.getElementById("wrong1").style.visibility = "visible";
        document.getElementById("correct1").style.visibility = "hidden";
        alert("Ohoo, Try Again!");
        wcount++;
        if (wcount == 2) {
          endGame();
        }
      }
    });
}
for (let i = 0; i < document.getElementsByClassName("options2").length; i++) {
  document
    .getElementsByClassName("options2")
    [i].addEventListener("click", function () {
      if (
        document.getElementsByClassName("options2")[i].innerText == "BHAGALPUR"
      ) {
        document.getElementById("correct2").style.visibility = "visible";
        document.getElementById("wrong1").style.visibility = "hidden";
        ccount++;
        if (ccount >= 2) {
          winGame();
        }
      } else {
        document.getElementById("wrong2").style.visibility = "visible";
        document.getElementById("correct2").style.visibility = "hidden";
        alert("Ohoo, Try Again!");
        wcount++;
        if (wcount == 2) {
          endGame();
        }
      }
    });
}
