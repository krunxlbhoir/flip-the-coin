const flipBtn = document.querySelector("#flipBtn");
const coin = document.querySelector("#coin");
const statusText = document.querySelector("#status");

// Start at 0
let currentRotation = 0;

flipBtn.addEventListener("click", () => {
    flipBtn.disabled = true;
    statusText.textContent = "Flipping...";

    // 1. Randomize result (0 for Heads, 1 for Tails)
    const isHeads = Math.random() < 0.5;
    
    // 2. Add a massive random amount of full spins (between 5 and 10)
    // This makes the flip look natural and different every time
    const extraSpins = (Math.floor(Math.random() * 5) + 5) * 360;
    
    // 3. Logic: 
    // If we want Heads, we must end at a multiple of 360 (0, 360, 720...)
    // If we want Tails, we must end at a multiple of 360 + 180 (180, 540, 900...)
    const resultDegrees = isHeads ? 0 : 180;
    
    // We update the rotation by adding the spins + the result degrees
    // This ensures it always moves FORWARD
    currentRotation += extraSpins + resultDegrees;

    // 4. Apply the rotation
    coin.style.transform = `rotateY(${currentRotation}deg)`;

    // 5. Update the text only AFTER the animation ends
    setTimeout(() => {
        statusText.textContent = isHeads ? "It's HEADS!" : "It's TAILS!";
        flipBtn.disabled = false;
    }, 2000); // This must match your CSS transition time
});
