//Shrek Tier: Implemented simultaneous two player mode with A and D keys (30)
//Both players work together to try to get a combined high score
class Rocket2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sfx
    }
    update(){
        if(!this.isFiring){
            if(keyA.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();  //play sfx
        }
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
            if(keyA.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
    
} 
