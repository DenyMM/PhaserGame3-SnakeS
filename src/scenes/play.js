import Snake from '../gameobjects/Snake.js'
import Food from '../gameobjects/Food.js'
class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }
  preload(){
    console.log('prelo play');
    /* cargar imagenes individualmente
    this.add.image(10, 10, 'Body');*/
    this.snake = new Snake(this);
    this.food = new Food(this);
  }
  create(){
    this.input.keyboard.on('keydown_RIGHT', () => {
      this.snake.changeMov('derecha');
    });
    this.input.keyboard.on('keydown_LEFT', () => {
      this.snake.changeMov('izquierda');
    });
    this.input.keyboard.on('keydown_UP', () => {
      this.snake.changeMov('arriba');
    });
    this.input.keyboard.on('keydown_DOWN', () => {
      this.snake.changeMov('abajo');
    });
  }
  update(time) {
    this.snake.update(time);
  }
}
export default Play;
