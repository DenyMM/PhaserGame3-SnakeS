import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import Ui from './scenes/UI.js';
import Menu from './scenes/menu.js';
import Gameover from './scenes/gameover.js';
const config = {
  tittle:'SnakeS',
  width: 320,
  height: 180,
  type: Phaser.AUTO,
  parent: 'container',
  backgroundColor: 'B1B7B5',
  pixelArt: true,
  physics: {
    default: "arcade",
/* propiedades de personaje
arcade: {
      gravity:{y: 100}
    }*/
  },
  scene: [Bootloader, Play, Gameover, Ui, Menu]
};

new Phaser.Game(config);
