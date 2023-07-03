function randomColor() {
    var num = Math.floor(Math.random()*Math.pow(2,24));
    return "#"+('000000' + num.toString(16)).substring(6);
}

var canvas = document.getElementById("troll-canvas");
var ctx = canvas.getContext("2d");

let x = Math.random() * (canvas.width-16*3);
let y = Math.random() * (canvas.height-16*3);
let dx = (Math.random() > 0.5 ? 1 : -1)*2.5;
let dy = (Math.random() > 0.5 ? 1 : -1)*2.5;
let scale = 3;
let bgColor = "#fff";

let trollPath = new Path2D('m 6,0 h 8 v 2 h 2 v 12 h -2 v 2 H 2 V 14 H 0 V 8 H2 V 6 H 4 V 2 h 2 z');
let trollWhiteRects = new Path2D();
trollWhiteRects.rect(4, 4, 2, 2);
trollWhiteRects.rect(10, 4, 2, 2);
trollWhiteRects.rect(2, 8, 10, 2);
let trollBrownRects = new Path2D();
trollBrownRects.rect(6, 4, 2, 2);
trollBrownRects.rect(12, 4, 2, 2);
trollBrownRects.rect(12, 8, 2, 2);
trollBrownRects.rect(4, 10, 8, 2);

function animate() {
    x += dx;
    y += dy;

    if (x + 16*scale > canvas.width || x < 0) {
        x = Math.max(0, Math.min(canvas.width-16*scale, x));
        dx = -dx;
        dx *= 1+(0.25-Math.random()*0.5);
        bgColor = randomColor();
    }

    if (y + 16*scale > canvas.height || y < 0) {
        y = Math.max(0, Math.min(canvas.width-16*scale, y));
        dy = -dy;
        dy *= 1+(0.25-Math.random()*0.5);
        bgColor = randomColor();
    }

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // paint fantroll
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale,scale);
    ctx.fillStyle = "#fccd4b";
    ctx.fill(trollPath);
    ctx.fillStyle = "white";
    ctx.fill(trollWhiteRects);
    ctx.fillStyle = "#684503";
    ctx.fill(trollBrownRects);
    ctx.restore();

    requestAnimationFrame(animate);
}

animate();
