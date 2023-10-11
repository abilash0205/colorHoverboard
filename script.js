const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#721422",
  "#1C542D",
  "#D0D0D0",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}

function removeColor(element) {
  // setTimeout(() => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
  // }, 1500);
}

const SQUARES = 750;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));
}
