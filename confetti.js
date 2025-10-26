// confetti.js
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];
const colors = ['#FFD700', '#FF0000', '#FFFFFF', '#000000'];

for (let i = 0; i < 100; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 50 + 50,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(p.d);
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
}

drawConfetti();
