
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function startPage() {
  showScreen("letter");
}

function openLetter() {
  document.getElementById("letterText").style.display = "block";
}

function completeLetter() {
  showScreen("next");
}
