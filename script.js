const quotes = [
  "Stay positive.",
  "Keep learning.",
  "You can do this.",
  "Believe in yourself."
];

document.getElementById("btn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});