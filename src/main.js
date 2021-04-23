//Julian Liaw
//Rocket Patrol MOD
//4/23/2021
//This project took me around 10 hours to complete

//Point Breakdown:
//Simultaneous two player mode (30)
//Timing mechanism that adds time to clock (20)
//New spaceship with artwork thats smaller and faster (20)
//New title screen (10)
//Display time remaining (10)
//Allow the player to control rocket (5)
//Total (95) (still working)

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
//reserve keyboard vars
let keyLEFT, keyRIGHT, keyF, keyR, keyA, keyD, keyW;