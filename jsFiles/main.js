who = "backgroundGenerator";

function setup() {
    lastWidth = document.getElementById("main").clientHeight

    createCanvas(document.getElementById("main").clientWidth - 1, document.getElementById("main").clientHeight - 1);
    frameRate(60);
    setupSS();
    setupBH();
    setupFF();
    setupBG();
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
    if (document.getElementById("main").clientWidth != lastWidth) {
        resizeCanvas(document.getElementById("main").clientWidth - 1, document.getElementById("main").clientHeight - 1);
        lastWidth = document.getElementById("main").clientWidth;
        if (who == "backgroundGenerator") {
            setupBG();
        }
    }
}

function switchWho(whoIs) {
    who = whoIs;
    background(0);

    switch (who) {
        case "blackHole":
            document.getElementById("postMainTitle").innerHTML = "BLACK HOLE";
            document.getElementById("postMainText").innerHTML = "This simulation is a representation of Black Holes attraction. It's not physically accurate, but some tricks allowed me to make it look like it. <br><br> if you reset the simulation enough times, you'll eventually get a seed where the two black holes are very closes, almost merging together. It looks cool and wasn't even hard coded, it's just a consequence of other elements of the simulation.";

            setupBH();
            break;
        case "flowField":
            document.getElementById("postMainTitle").innerHTML = "FLOW FIELD";
            document.getElementById("postMainText").innerHTML = "Flow fields are, by definition, distribution of the density and velocity of a fluid over space and time. More simply, it's an environnement where points move in the direction of a dynamic flow. <br><br> In my case, the flow is procedurally generated using perlin noise, and moves with a rotation and position offset updating each frame.<br><br> This version of flow field is a quite simple one, but I made another one, more complete, with presets, and that you can change variables so it's easier to understand how it works. You can find it on <a class='textLink otherLink' target='_blank' href='https://chevalmonsieur.github.io/AdaptativeFlowField/'>this link</a>.";
            setupFF();
            break;
        case "screenSaver":
            document.getElementById("postMainTitle").innerHTML = "SCREEN SAVER";
            document.getElementById("postMainText").innerHTML = "simply a screen saver, it uses perlin noise to move points around an original fixed point and then depending on the offset position, attributes a color. <br><br> It's kind of hypnotising";
            setupSS();
            break;
        case "backgroundGenerator":
            document.getElementById("postMainTitle").innerHTML = "BACKGROUND GENERATOR";
            document.getElementById("postMainText").innerHTML = "Even if it's the one that was the easiest to make, this blurry and grainy background generator is my favourite generative artwork. The colours perfectly match together in majority of cases, and the grainy effect does add a lot to the final result. <br><br> I did use it multiple times for my other projects. It blends very well in the background and does have the 'design' feeling to it.";
            setupBG();
            break;
    }
}