function setupFF() {
    FFpoints = [], FFnbPoints = 5000, FFopacity = 100, FFspeed = 50, FFpositionScale = 10000, FFnoiseScale = 200, FFfade = 15;

    noiseSeed(random(1000));
    background(0);
    for (let i = 0; i < FFnbPoints; i++) FFpoints.push(createVector(random(width), random(height)));
}

function drawFF() {
    strokeWeight(1);
    stroke(130,0,200,FFopacity);
    background(0, FFfade);

    for (FFvector of FFpoints) {
        FFdirection = 2 * FFnoiseScale * Math.PI * noise(FFvector.x / FFpositionScale, FFvector.y / FFpositionScale);
        FFvector.x += Math.cos(FFdirection) * FFspeed, FFvector.y += Math.sin(FFdirection) * FFspeed;
        if (FFvector.x < 0 || FFvector.x > innerWidth || FFvector.y < 0 || FFvector.y > innerHeight) {FFvector.x = random(width); FFvector.y = random(height);}
        point(FFvector.x, FFvector.y)
    }
}