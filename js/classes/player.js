const gravity = 0.1

class Player extends Sprite {
    constructor({ position, floorBlocks, platformBlocks, animations }) {
        super({ imageSrc: animations.idle.images[0] })
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }

        this.frames = animations.idle.images
        this.frameBuffer = animations.idle.frameBuffer
        this.frameInterval = animations.idle.images.length
        this.frameIndex = 0
        this.frameTimer = 0

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

        this.animations = animations
        this.lastDirection = 'right'
    }

    update() {
        this.animateFrames();
        this.draw(this.lastDirection)
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

    swapAnimation(animation){ 
        if (this.frames === this.animations[animation].images || !this.loaded) return;
        this.frames = this.animations[animation].images;
        this.frameBuffer = this.animations[animation].frameBuffer;
        this.frameInterval = this.animations[animation].images.length;
        this.frameIndex = 0;
        this.frameTimer = 0;
    }

    animateFrames() {
        if (this.frameTimer > this.frameInterval * this.frameBuffer) {
            this.frameIndex = (this.frameIndex + 1) % this.frames.length;
            this.image.src = this.frames[this.frameIndex];
            this.frameTimer = 0;
        } else {
            this.frameTimer += 16.67;
        }
    }

    applyGravity() {
        this.velocity.y += gravity
        this.position.y += this.velocity.y
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