const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

const scale = 2

const scaledCanvas = {
    width: canvas.width / scale,
    height: canvas.height / scale,
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
                },
                height: 8
            }))
        }
    })
})


const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },

}

window.addEventListener('keydown', (event) => {
    if(event.key in keys) keys[event.key].pressed = true

    console.log(event.key);

    switch(event.key) {
        case 'h':
            player.attacking = true
            player.swapAnimation('atk_1')
            setTimeout(() => {player.attacking = false}, 500) 
            break; 
        case 'j':
            player.attacking = true
            player.swapAnimation('atk_2')
            setTimeout(() => {player.attacking = false}, 1000) 
            break; 
        case 'k':
            player.attacking = true
            player.swapAnimation('atk_3')
            setTimeout(() => {player.attacking = false}, 1500) 
            break;
        case 'l':
            player.attacking = true
            player.swapAnimation('sp_atk')
            setTimeout(() => {player.attacking = false}, 900) 
            break; 
        case ' ':
            player.rolling = true
            player.swapAnimation('roll')
            setTimeout(() => {player.rolling = false}, 500) 
            break; 
        case 'm':
            player.swapAnimation('defend')
            break; 
    }
})

window.addEventListener('keyup', (event) => {
    keys[event.key].pressed = false
})

const player = new Player({
    position: {
        x: 200,
        y: 700
    },
    floorBlocks,
    platformBlocks,
    animations: playerAnimations
})

// const player2 = new Player({
//     position: {
//         x: 400,
//         y: 700
//     },
//     floorBlocks,
//     platformBlocks,
//     animations: playerAnimations
// })

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/background.png'
})

const backgroundImage = {
    height: 1024,
    width: 1792
}
const camera = {
    position: {
        x: 0,
        y: -backgroundImage.height + scaledCanvas.height + 100,
    }
}

function animate() {
    window.requestAnimationFrame(animate)

    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.save()

    c.scale(scale, scale)
    c.translate(camera.position.x, camera.position.y)
    background.update()

    floorBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })
    platformBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })

    player.checkHorizontalCanvasCollision({image: backgroundImage})
    player.checkVerticalCanvasCollision()
    player.update()

    // player2.checkHorizontalCanvasCollision({image: backgroundImage})
    // player2.checkVerticalCanvasCollision()
    // player2.update()
    movePlayer()

    c.restore()
    
}

function movePlayer() {
    player.velocity.x = 0

    if(keys.w.pressed) {
        if (player.velocity.y === 0) player.velocity.y = -7
    }
    
    if (keys.d.pressed) { 
        player.lastDirection = 'right'
        if(!player.attacking && !player.rolling) player.swapAnimation('run')
        player.velocity.x = 5
        player.panLeft({canvas: canvas, camera: camera, scale: scale, image: backgroundImage})
    } else if (keys.a.pressed) { 
        player.lastDirection = 'left'
        if(!player.attacking && !player.rolling) player.swapAnimation('run')
        player.velocity.x = -5
        player.panRight({camera: camera})
    } else if (player.velocity.y === 0 && !player.attacking) {
        player.swapAnimation('idle')
    }

    if (player.velocity.y < 0) { 
        player.panDown({camera: camera})
        if(!player.attacking && !player.rolling) player.swapAnimation('jump_up')
    } else if (player.velocity.y > 0) { 
        player.panUp({canvas: canvas, camera: camera, scale: scale, image: backgroundImage})
        if(!player.attacking && !player.rolling) player.swapAnimation('jump_down')
    } 
}
animate()


function resizeCanvas() {
    const heightRatio = 9 / 16;  // This is an example ratio; adjust as needed
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth * heightRatio;

    // Ensure the canvas does not exceed the height of the window
    if (canvas.height > window.innerHeight) {
        canvas.height = window.innerHeight;
        canvas.width = canvas.height / heightRatio;
    }

    // Center the canvas
    canvas.style.position = "absolute";
    canvas.style.left = (window.innerWidth - canvas.width) / 2 + 'px';
    canvas.style.top = (window.innerHeight - canvas.height) / 2 + 'px';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();