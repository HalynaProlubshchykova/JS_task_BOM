const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "I was pressed!";
});

btn.addEventListener("mouseover", () => {
  message.textContent = "Mouse on me!";
});

btn.addEventListener("mouseout", () => {
  message.textContent = "Mouse is not on me!";
});
