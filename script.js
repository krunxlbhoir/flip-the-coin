const flipBtn = document.querySelector("#flipBtn");
const coin = document.querySelector("#coin");
const statusText = document.querySelector("#status");

let totalRotation = 0;

flipBtn.addEventListener("click", () => {
    flipBtn.disabled = true;
    statusText.textContent = "Flipping...";

    // 1. Randomize result
    const isHeads = Math.random() < 0.5;

    /* 2. THE MATH FIX:
       - We want at least 5 full rotations (1800deg).
       - If it's Heads, we need the total degrees to be a multiple of 360.
       - If it's Tails, we need it to be a multiple of 360 + 180.
    */
    
    // Calculate how much we need to add to reach the next "Heads" (360n)
    // then add the extra 180 if we want Tails.
    const currentModulo = totalRotation % 360;
    let degreesToAdd = 1800; // Base spins

    if (isHeads) {
        // If we are currently at 180 (Tails), we need 180 more to hit 360 (Heads)
        degreesToAdd += (currentModulo === 0 ? 0 : 180);
    } else {
        // If we are currently at 0 (Heads), we need 180 more to hit Tails
        degreesToAdd += (currentModulo === 0 ? 180 : 0);
    }

    totalRotation += degreesToAdd;

    // 3. Apply the rotation
    coin.style.transform = `rotateY(${totalRotation}deg)`;

    // 4. Update UI after the CSS transition (2000ms)
    setTimeout(() => {
        statusText.textContent = isHeads ? "It's HEADS!" : "It's TAILS!";
        flipBtn.disabled = false;
    }, 2000);
});
