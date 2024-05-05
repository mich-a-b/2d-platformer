class Sprite {
    constructor({ position, imageSrc, scale = 1 }) {
        this.position = position
        this.scale = scale
        this.loaded = false
        this.image = new Image()
        this.image.onload = () => {
            this.width = (this.image.width * this.scale)
            this.height = (this.image.height * this.scale)
            this.loaded = true
        }
        this.image.src = imageSrc
    }

    draw(direction = 'right') {
        if(!this.image) return
        c.save();
        if(direction === 'right'){
            c.translate(this.position.x, this.position.y);
        } else {
            c.scale(-1, 1)
            c.translate(-this.position.x - this.width, this.position.y);
        }

        c.drawImage(this.image, 0, 0, this.width, this.height);
        c.restore();
    }

    update() {
        this.draw()
    }
}