const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

let boatX = 50; // Initial x position of the boat
const boatSpeed = 2; // Speed of movement

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw Pond (Oval)
    ctx.fillStyle = "#1E90FF";
    ctx.beginPath();
    ctx.ellipse(250, 300, 200, 50, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Boat (Polygon - Quadrilateral with curved edges)
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(boatX, 290);
    ctx.lineTo(boatX + 50, 270);
    ctx.lineTo(boatX + 100, 290);
    ctx.lineTo(boatX + 80, 310);
    ctx.lineTo(boatX + 20, 310);
    ctx.closePath();
    ctx.fill();

    // Draw Duck (Two Circles)
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(180, 280, 10, 0, Math.PI * 2);
    ctx.arc(195, 290, 15, 0, Math.PI * 2);
    ctx.fill();

    // Draw Sun (Large Circle with outward lines)
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(400, 50, 30, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 12; i++) {
        let angle = (Math.PI / 6) * i;
        ctx.beginPath();
        ctx.moveTo(400 + Math.cos(angle) * 30, 50 + Math.sin(angle) * 30);
        ctx.lineTo(400 + Math.cos(angle) * 40, 50 + Math.sin(angle) * 40);
        ctx.stroke();
    }

    // Draw House (Rectangle + Triangle)
    ctx.fillStyle = "red";
    ctx.fillRect(300, 250, 60, 50);
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(330, 220);
    ctx.lineTo(360, 250);
    ctx.closePath();
    ctx.fill();

    // Draw Flower (Ellipse with stem, leaves, petals)
    ctx.fillStyle = "green";
    ctx.fillRect(80, 280, 5, 40);
    ctx.beginPath();
    ctx.arc(82, 275, 5, 0, Math.PI * 2);
    ctx.fill();

    // Draw Stones (Small Circles)
    ctx.fillStyle = "gray";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(250 + i * 15, 350, 7, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    boatX += boatSpeed;
    if (boatX > canvas.width) {
        boatX = -100; // Reset when it moves off-screen
    }
    drawScene();
    requestAnimationFrame(animate);
}

drawScene(); // Initial draw
animate(); // Start animation
