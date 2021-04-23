//const { Phaser } = require("../../lib/phaser");

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload(){
        //load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
    //Novice Tier: New title screen (10)
    create() {
        let menuConfig = {
            fontFamily: 'Quicksand',
            fontSize: '28px',
            backgroundColor: '#ff0032',
            color: '#000',
            align: 'right',
            padding: {
                top: 0,
                bottom: 0,
            },
            fixedWidth: 0
        }
        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - borderPadding - borderPadding - borderPadding - borderPadding, 'ROCKET PATROL 2.0', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Player 1: Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Player 2: Use A and D to move & (G) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#c33b00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or ->for Expert', menuConfig).setOrigin(0.5);
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
    
}