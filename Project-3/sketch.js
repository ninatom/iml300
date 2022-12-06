function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(231, 229, 228);

    fill(148, 47, 7);
    for (let col = 0; col <= width; col += 60) {
        for (let row = 0; row <= height; row += 60) {
            push();
            translate(col, row);
            rotate(frameCount * 0.02);
            rectMode(CENTER);
            noStroke();
            fill(91, 62, 56);
            rect(0, 0, 20, 60);
            pop();
        }
    }
}
