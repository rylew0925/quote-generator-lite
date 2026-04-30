const quotes = [
  "Stay positive.",
  "Keep learning.",
  "You can do this.",
  "Never stop improving."
];

document.getElementById("btn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});

console.log("Button clicked!");

const version = "1.0.1";