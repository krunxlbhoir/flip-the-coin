const flipBtn = document.querySelector("#flipBtn");
const coin = document.querySelector("#coin");
const statusText = document.querySelector("#status");

let currentRotation = 0;
const animationDuration = 2000;

flipBtn.addEventListener("click", () => {
  flipBtn.disabled = true;
  statusText.textContent = "Flipping...";

  const isHeads = Math.random() < 0.5;

  const spins = 5;
  const spinDegrees = spins * 360;

  // Normalize current face (0 = heads, 180 = tails)
  const currentFace = currentRotation % 360 === 0 ? 0 : 180;

  // Decide target face
  const targetFace = isHeads ? 0 : 180;

  // Calculate needed correction
  const faceCorrection = targetFace - currentFace;

  currentRotation += spinDegrees + faceCorrection;

  coin.style.transform = `rotateY(${currentRotation}deg)`;

  setTimeout(() => {
    statusText.textContent = isHeads ? "It's HEADS!" : "It's TAILS!";
    flipBtn.disabled = false;
  }, animationDuration);
});
