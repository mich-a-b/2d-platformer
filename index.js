const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const imgScale = 2.5

const scaledCanvas = {
    width: canvas.width / imgScale,
    height: canvas.height / imgScale,
}


// collisions // study this

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 56) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 56))
}
const floorBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value !== 0) {
            floorBlocks.push(new CollisionBlock({
                position: {
                    x: x * 32,
                    y: y * 32
                }
            }))
        }
    })
})

const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 56) {
    platformCollisions2D.push(platformCollisions.slice(i, i + 56))
}
const platformBlocks = []
platformCollisions2D.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value !== 0) {
            platformBlocks.push(new CollisionBlock({
                position: {
                    x: x * 32,
                    y: y * 32
                }
            }))
        }
    })
})

// function
function drawCanvas() {
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
}


const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },

}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 'w':
            player.velocity.y = -5
            break;
        case ' ':
            player.velocity.y = -5
            break;

    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;

    }
})

const player = new Player({
    position: {
        x: 200,
        y: 700
    },
    floorBlocks,
    platformBlocks,
    imageSrc: playerAnimations.idle
})

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/background.png'
})

function animate() {
    drawCanvas()

    c.save()

    c.scale(imgScale, imgScale)
    c.translate(0, -background.image.height + scaledCanvas.height)
    background.update()

    floorBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })
    platformBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })

    player.update()

    player.velocity.x = 0
    if (keys.d.pressed) { player.velocity.x = 5 }
    else if (keys.a.pressed) { player.velocity.x = -5 }

    c.restore()
    window.requestAnimationFrame(animate)
}

animate()

