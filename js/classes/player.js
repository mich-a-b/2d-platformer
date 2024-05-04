const gravity = 0.1

class Player {
    constructor({position, floorBlocks, platformBlocks}) {
        this.position = position
        this.width = 50
        this.height = 75
        this.floorBlocks = floorBlocks
        this.platformBlocks = platformBlocks
        this.velocity = {
            x: 0,
            y: 1
        }
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.checkHorizontalCollisions()
        this.applyGravity()
        this.checkVerticalCollisions()
    }

    applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }

    checkVerticalCollisions(){
        for (let i = 0; i < this.floorBlocks.length; i++){
            const collisionBlock = this.floorBlocks[i]
            if(collision({ object1: this, object2: collisionBlock })){

               if(this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y - this.height - 0.01
                break
               }

               if (this.velocity.y < 0) {
                this.velocity.y = 0
                this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                break
               }
            }
        }
    }

    checkHorizontalCollisions(){
        for (let i = 0; i < this.floorBlocks.length; i++){
            const collisionBlock = this.floorBlocks[i]
            if(collision({ object1: this, object2: collisionBlock })){

               if(this.velocity.x > 0) {
                this.velocity.x = 0
                this.position.x = collisionBlock.position.x - this.width - 0.01
                break
               }

               if (this.velocity.x < 0) {
                this.velocity.x = 0
                this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                break
               }
            }
        }
    }
}