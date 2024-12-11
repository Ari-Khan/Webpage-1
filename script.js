const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 15 + 240);
    return `rgb(${r}, ${g}, ${b})`; 
}

for (let i = 1; i <= 30; i++) {
    const x = Math.random() * 1300 + 100;
    const y = Math.random() * 250 + 100;
    const radius = Math.random() * 70 + 30;

    const randomColor = getRandomColor();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = randomColor;
    ctx.fill();
}

