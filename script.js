const messages = [
    "You make every day brighter",
    "Counting the days until you're back",
    "Bulgaria is lucky to have you",
    "You're my favorite thought",
    "Miss you, Princess",
    "I love you",
    "I'm so lucky to have you",
    "I hear your cute laughter in my dreams"
    "Chum netflix tmm"
];

let currentIndex = 0;
const messageElement = document.getElementById('message');

function changeMessage() {

    messageElement.classList.add('fade-out');
    
    setTimeout(() => {

        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
        

        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
        

        setTimeout(() => {
            messageElement.classList.remove('fade-in');
        }, 1500);
    }, 1500);
}

setInterval(changeMessage, 6000);


messageElement.textContent = messages[0];

// Create falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    
    // Create more even distribution across the screen
    const screenWidth = window.innerWidth;
    const heartWidth = 30; // Approximate heart width
    const maxHeartsPerRow = Math.floor(screenWidth / heartWidth);
    const columnIndex = Math.floor(Math.random() * maxHeartsPerRow);
    const columnWidth = screenWidth / maxHeartsPerRow;
    const leftPosition = (columnIndex * columnWidth) + (Math.random() * (columnWidth - heartWidth));
    
    heart.style.left = leftPosition + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.1;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 150);

// Create initial hearts
for (let i = 0; i < 15; i++) {
    setTimeout(() => createHeart(), i * 100);
} 