import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
const config = {
  tittle:'SnakeS',
  width: 320,
  height: 180,
  type: Phaser.AUTO,
  parent: 'container',
  backgroundColor: 'f9ca24',
  pixelArt: true,
  scene: [Bootloader, Play]
};

new Phaser.Game(config);
