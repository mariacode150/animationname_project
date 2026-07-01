const canvas = document.getElementById("waterCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let waveOffset = 0;

function drawBackground() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    gradient.addColorStop(0, "#021526");
    gradient.addColorStop(0.5, "#03396c");
    gradient.addColorStop(1, "#01111d");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function drawWave() {

    ctx.beginPath();

    ctx.moveTo(0, canvas.height * 0.70);

    for (let x = 0; x <= canvas.width; x++) {

        let y =
            canvas.height * 0.70 +
            Math.sin((x + waveOffset) * 0.02) * 15;

        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);

    ctx.closePath();

    ctx.fillStyle = "rgba(0,180,255,0.35)";
    ctx.fill();

}

function animate() {

    waveOffset += 2;

    drawBackground();

    drawWave();

    requestAnimationFrame(animate);

}

animate();