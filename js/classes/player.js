const gravity = 0.1

class Player extends Sprite {
    constructor({ position, floorBlocks, platformBlocks, imageSrc }) {
        super({ imageSrc: imageSrc[0] })
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.frames = imageSrc
        this.frameIndex = 0
        this.frameTimer = 0
        this.frameInterval = 100

        this.floorBlocks = floorBlocks
        this.platformBlocks = platformBlocks
        this.hitbox = {
            position: {
                x: this.position.x + 134,
                y: this.position.y + 82
            },
            width: 25,
            height: 45.5
        }
    }

    update() {
        this.animateFrames();
        

        // draws whole image
        // c.fillStyle = 'rgba(0, 255, 0, 0.2'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        // draws hitbox
        // c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)


        this.draw()
        this.position.x += this.velocity.x
        this.updateHitbox();
        this.checkHorizontalCollisions()
        this.applyGravity()
        this.updateHitbox();
        this.checkVerticalCollisions()
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 134,
                y: this.position.y + 82
            },
            width: 25,
            height: 45.5
        }
    }

    animateFrames() {
        if (this.frameTimer > this.frameInterval) {
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.image.src = this.frames[this.frameIndex]
            this.frameTimer = 0
        } else {
            this.frameTimer += 13.00
        }
    }

    applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }

    checkVerticalCollisions() {
        for (let i = 0; i < this.floorBlocks.length; i++) {
            const collisionBlock = this.floorBlocks[i]
            if (collision({
                object1: this.hitbox,
                object2: collisionBlock
            })) {

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }
            }
        }
    }

    checkHorizontalCollisions() {
        for (let i = 0; i < this.floorBlocks.length; i++) {
            const collisionBlock = this.floorBlocks[i]
            if (collision({ object1: this.hitbox, object2: collisionBlock })) {

                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }

                if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }
            }
        }
    }
}