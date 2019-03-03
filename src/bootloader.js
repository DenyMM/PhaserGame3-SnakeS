class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }
  preload(){
    console.log('prelo');
    this.load.image('Body', './assets/body.png');
    this.load.image('Papitas', './assets/papitas.png');
    this.load.image('Hanb', './assets/hamburger.png');
    this.load.image('Sushi', './assets/sushi.png');
    this.load.image('Taco', './assets/taco.png');
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
