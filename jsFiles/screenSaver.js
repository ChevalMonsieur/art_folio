function setupSS() {
    espacementPoints = 20;
    rotationScale = 0.8;
    positionScale = 600;
    offsetScale = 60;
    offsetNoise = 0.000001;
    totalOffsetNoise = 0;
    offsetRotation = 0.000004;
    totalOffsetRotation = 3;

    noiseSeed(random(1000));
}

function drawSS() {
    stroke(255)
    strokeWeight(2)

    background(0)

    for (let i = -offsetScale; i < width + offsetScale; i += espacementPoints) {
        for (let j = -offsetScale; j < height + offsetScale; j += espacementPoints) {
            totalOffsetNoise += offsetNoise
            totalOffsetRotation += offsetRotation

            let direction = 2 * rotationScale * Math.PI * noise(i / positionScale - totalOffsetNoise, j / positionScale - totalOffsetNoise) + totalOffsetRotation

            x = i + Math.cos(direction) * offsetScale
            y = j + Math.sin(direction) * offsetScale
            r = Math.cos(direction) * 255
            g = Math.sin(direction) * 255
            opacity = 255 * direction

            stroke(r, r / 2, g, opacity)
            point(x, y)
        }
    }
}