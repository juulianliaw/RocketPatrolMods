class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update(){
        //move spaceship left
        this.x -= this.moveSpeed*2;
        //wrap around from left to right
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }
    reset(){
        this.x = game.config.width;
    }
}