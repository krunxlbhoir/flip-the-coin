const flipBtn = document.querySelector("#flipBtn");
const coin = document.querySelector("#coin");
const statusText = document.querySelector("#status");

let totalRotation = 0;

flipBtn.addEventListener("click", () => {
    // 1. Disable button during animation
    flipBtn.disabled = true;
    statusText.textContent = "Flipping...";

    // 2. Decide Heads (0deg) or Tails (180deg)
    const isHeads = Math.random() < 0.5;
    
    // 3. Add at least 5 full spins (1800deg) + the result
    // We add to the current rotation so it always spins forward
    const extraSpin = isHeads ? 0 : 180;
    totalRotation += 1800 + extraSpin; 

    // 4. Apply the rotation
    coin.style.transform = `rotateY(${totalRotation}deg)`;

    // 5. Wait for animation to finish (2 seconds)
    setTimeout(() => {
        statusText.textContent = isHeads ? "It's HEADS!" : "It's TAILS!";
        flipBtn.disabled = false;
    }, 2000);
});