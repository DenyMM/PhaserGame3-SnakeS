class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [this.scene.physics.add.image(10, 10, 'Body')];
    this.dir = 'derecha';
    this.timmer = 0;
  }
  changeMov(dir){
    this.dir = dir;
  }
  update(time){
    if(time > this.timmer){
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
