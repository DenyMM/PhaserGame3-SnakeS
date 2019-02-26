class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }
  preload(){
    console.log('prelo');
    this.scene.start('Play');
  }
}
export default Bootloader;
