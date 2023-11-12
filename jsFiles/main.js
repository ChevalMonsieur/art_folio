who = "screenSaver";

function setup() {
    createCanvas(document.getElementById("main").clientWidth - 1, document.getElementById("main").clientHeight - 1);
    frameRate(60);
    setupSS();
    setupBH();
    setupFF();
}

function draw() {
    switch (who) {

        case "blackHole":
            drawBH();
            break;
        case "flowField":
            drawFF();
            break;
        case "screenSaver":
            drawSS();
            break;
        case "backgroundGenerator":
            break;
    }
}

function windowResized() {
    resizeCanvas(document.getElementById("main").clientWidth - 1, document.getElementById("main").clientHeight - 1);
}