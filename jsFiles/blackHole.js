function setupBH() {
    BHpoints = []
    BHspirals = []
    BHnbPoints = 5000
    BHnbSpirals = 2
    BHoffsetRotation = 0.3
    BHstrength = 100

    for (let i = 0; i < BHnbSpirals; i++) {
        BHspirals.push(createVector(random(width), random(height)))
    }
    for (let i = 0; i < BHnbPoints; i++) {
        BHpoints.push(createVector(random(width), random(height)))
    }
}

function drawBH() {
    stroke(255, 180, 140, 20)
    strokeWeight(1)
    background(0, 10)

    for (BHp of BHpoints) {
        for (BHs of BHspirals) {
            BHdistanceFromSpiral = BHp.copy().sub(BHs).mag()
            if (BHdistanceFromSpiral < BHstrength / 5 && random(1) < 0.05) {
                BHp.x = random(width)
                BHp.y = random(height)
            } 
            else if (BHp.x < 0 || BHp.x > width || BHp.y < 0 || BHp.y > height) BHp.x = random(width), BHp.y = random(height)
            else {
                BHspeed = 1 / BHdistanceFromSpiral * BHstrength / 4
                BHparallelVectorFromSpiral = BHp.copy().sub(BHs).rotate(PI / 2 + BHoffsetRotation).normalize().mult(BHspeed)

                BHp.add(BHparallelVectorFromSpiral)
            }
        }
        point(BHp.x, BHp.y)
    }
}