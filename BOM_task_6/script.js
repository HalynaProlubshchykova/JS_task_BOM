function updateWindowSize() {
  const windowSize = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`;
  document.getElementById("windowSize").textContent = windowSize;
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);
