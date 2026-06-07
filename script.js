const form = document.querySelector("form");
const statusLine = document.querySelector(".status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusLine.textContent = "NO ONE CARES.";
});
