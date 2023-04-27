function toggleBookmark(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("bookmark--active");
}

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", toggleBookmark);
