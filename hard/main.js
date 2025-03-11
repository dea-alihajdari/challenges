// Get references to HTML elements
const circle = document.getElementById('circle');
const reactionTimeDisplay = document.getElementById('reactionTime');
let startTime;
let endTime;

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

function getRandomPosition() {
    const gameArea = document.getElementById('gameArea');
    const maxX = gameArea.offsetWidth - circle.offsetWidth;
    const maxY = gameArea.offsetHeight - circle.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
}

function showCircle() {
    const { x, y } = getRandomPosition();
    const color = getRandomColor();
    
    
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.backgroundColor = color;
    
    
    circle.style.display = 'block';
    
    startTime = Date.now();
}


function hideCircle() {
    circle.style.display = 'none';
}

function handleClick() {
    if (circle.style.display === 'none') return; 
    

    endTime = Date.now();
    const reactionTime = endTime - startTime;
    

    reactionTimeDisplay.innerHTML = `Reaction Time: ${reactionTime} ms`;
    

    hideCircle();
    
 
    setTimeout(() => {
        showCircle();
    }, Math.random() * 2000 + 1000); 
}

circle.addEventListener('click', handleClick);

setTimeout(() => {
    showCircle();
}, Math.random() * 2000 + 1000); 
