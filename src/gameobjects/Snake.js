class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.dir = 'izquierda';
    this.timmer = 0;

     for(let i = 0; i < 3; i++){
       this.body.push(
         this.scene.physics.add.image(100 + i * 10, 100, 'Body')
             .setOrigin(0)
           );
     }
  }
  changeMov(dir){
    this.dir = dir;
  }
  update(time){
    if(time > this.timmer){

      for (let i = this.body.length -1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;

        this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].x,
          0,
          this.scene.sys.game.config.width);

      }

      switch (this.dir) {
        case 'derecha':
           this.body[0].x += 10;
          break;
        case 'izquierda':
           this.body[0].x -= 10;
          break;
        case 'arriba':
           this.body[0].y -= 10;
          break;
        case 'abajo':
           this.body[0].y += 10;
          break;
      }
      this.timmer = time + 150;
    }
  }
}
export default Snake;
