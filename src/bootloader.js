class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }
  preload(){
    console.log('prelo');
    this.load.image('Body', './assets/body.png');
    this.load.image('Food', './assets/food.png');
    this.load.image('Table', './assets/tablero.png');

    this.load.on('complete', () => {
      this.scene.start('Play');
    });

  }
  /* 2da opcion para cargar escena
  create(){
    this.scene.start('Play');
  }*/
}
export default Bootloader;
