let velocityY = 0;
let isJumping = false;

// Dans ton écouteur 'keydown'
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping) {
        velocityY = 0.15; // Puissance du saut
        isJumping = true;
    }
});

// Dans ta fonction animate()
function updatePhysics() {
    if (isJumping) {
        mii.position.y += velocityY;
        velocityY -= 0.008; // Gravité

        if (mii.position.y <= 0.2) { // Sol
            mii.position.y = 0.2;
            isJumping = false;
            velocityY = 0;
        }
    }
}