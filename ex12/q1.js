window.onload = function() {
    const canvas = document.getElementById("scene");
    const ctx = canvas.getContext("2d");

    // Draw Pond (Oval)
    ctx.fillStyle = "#1E90FF";
    ctx.beginPath();
    ctx.ellipse(250, 300, 120, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Boat (Quadrilateral with curved edges)
    ctx.fillStyle = "#8B4513";
    ctx.beginPath();
    ctx.moveTo(200, 270);
    ctx.quadraticCurveTo(250, 300, 300, 270);
    ctx.lineTo(270, 250);
    ctx.lineTo(230, 250);
    ctx.closePath();
    ctx.fill();

    // Draw Duck (Two Circles)
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(180, 290, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(165, 280, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw Sun (Large Circle with Lines)
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 12; i++) {
        let angle = (i * Math.PI) / 6;
        let x1 = 50 + Math.cos(angle) * 30;
        let y1 = 50 + Math.sin(angle) * 30;
        let x2 = 50 + Math.cos(angle) * 40;
        let y2 = 50 + Math.sin(angle) * 40;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // Draw House (Rectangle + Triangle)
    ctx.fillStyle = "#8B0000";
    ctx.fillRect(320, 200, 80, 80);
    ctx.fillStyle = "#A52A2A";
    ctx.beginPath();
    ctx.moveTo(310, 200);
    ctx.lineTo(360, 150);
    ctx.lineTo(410, 200);
    ctx.closePath();
    ctx.fill();

    // Draw Flower (Ellipse, Line, Curved Leaves)
    ctx.fillStyle = "#008000";
    ctx.fillRect(100, 320, 5, 50);
    ctx.beginPath();
    ctx.moveTo(100, 340);
    ctx.quadraticCurveTo(90, 330, 80, 340);
    ctx.quadraticCurveTo(90, 350, 100, 340);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(105, 350);
    ctx.quadraticCurveTo(115, 340, 125, 350);
    ctx.quadraticCurveTo(115, 360, 105, 350);
    ctx.fill();
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.ellipse(100, 310, 15, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Stones (Multiple Small Circles)
    ctx.fillStyle = "#808080";
    for (let i = 0; i < 5; i++) {
        let x = 220 + i * 15;
        let y = 320 + (i % 2) * 5;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
    }
};
