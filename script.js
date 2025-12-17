const flipBtn = document.querySelector("#flipBtn");
const coin = document.querySelector("#coin");
const statusText = document.querySelector("#status");

// We track the total degrees to ensure the coin always spins forward
let totalRotation = 0;

flipBtn.addEventListener("click", () => {
    // 1. Disable button so user can't click during animation
    flipBtn.disabled = true;
    statusText.textContent = "Flipping...";

    // 2. Determine result FIRST
    const isHeads = Math.random() < 0.5;

    // 3. Calculate Rotation
    // A full spin is 360 degrees. 
    // We add 1800 degrees (5 full spins) to whatever the current rotation is.
    // Then, if it's Tails, we add an extra 180 degrees to land on the back.
    
    const extraSpins = 1800; 
    const currentModulo = totalRotation % 360;
    
    // This logic ensures that if the coin is currently on Tails (180), 
    // and the next result is Heads, it completes the half-turn correctly.
    let rotationAddition = extraSpins;

    if (isHeads) {
        // We want to end on a multiple of 360
        rotationAddition += (currentModulo === 0 ? 0 : 180);
    } else {
        // We want to end on a multiple of 360 + 180
        rotationAddition += (currentModulo === 0 ? 180 : 0);
    }

    totalRotation += rotationAddition;

    // 4. Execute the CSS Animation
    coin.style.transform = `rotateY(${totalRotation}deg)`;

    // 5. Update the text exactly when the animation finishes
    setTimeout(() => {
        statusText.textContent = isHeads ? "It's HEADS!" : "It's TAILS!";
        flipBtn.disabled = false;
    }, 2000); // Must match the 2s transition in your CSS
});
