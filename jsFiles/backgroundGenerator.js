function setupBG() {
    colors = []
    shrinkCanvas = 4
    noiseStrength = 0.05

    noStroke()

    // add random colors to color set
    for (let i = 0; i<5; i++) {
        colors.push(color(random(255), random(255), random(255)))
    }

    // add random shapes
    fill(colors[floor(random(5))])
    rect(0,0,width,height)
    for (let i = 0; i<10; i++) {
        let x = random(-100, width)
        let y = random(-100, height)
        let x1 = random(300, width-x+100)
        let y1 = random(350, height-y+100)
        fill(colors[floor(random(5))])
        if (random(1) > 0.5) circle(x, y, x1, y1)
        else rect(x,y,x1,y1)
    }

    //add blur
    filter(BLUR, 75);

    //add noise
    for (i = 0; i < width; i ++) {
        for (j = 0; j < height; j ++) {
            n = random();
            fill(255*n, 255*n, 255*n, noiseStrength*255);
            rect(i, j, 1);
        }
    }
}