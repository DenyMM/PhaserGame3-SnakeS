class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.dir = 'izquierda';
    this.timmer = 0;
    this.oldDir = 'derecha';  // para que no se regrese

     //genera cuerpo de personaje
     for(let i = 0; i < 3; i++){
       this.body.push(
         this.scene.physics.add.image(100 + i * 10, 100, 'Body')
             .setOrigin(0)
           );
     }
     //genera colisiones
     for(let i = 1; i < 10; i++){
       this.scene.physics.add.collider(this.body[0], this.body[i], () => this.choca());
     }
     setInterval(() => {
       this.crece();
     }, 1000);
  }
  crece(){
      const obj =  this.body[this.body.length-1];
      //crea nuevo objeto a agregar al cuerpo
      const newObj = this.scene.physics.add.image(obj.x, obj.y, 'Body').setOrigin(0);
      this.body.push(newObj);
      this.scene.physics.add.collider(this.body[0], newObj, () => this.choca());
  }
  choca(){
     this.scene.scene.start('Gameover');
  }
  changeMov(dir){
    if(this.oldDir != dir){
        this.dir = dir;
    }
  }
  update(time){
    if(time > this.timmer){

      for (let i = this.body.length -1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
         //Regresar snake al salir de la pantalla
        this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].x,
          0,
          this.scene.sys.game.config.width);

        this.body[this.body.length - 1 - i].y = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].y,
          20, //limite de aricion
          this.scene.sys.game.config.height);

      }

      switch (this.dir) {
        case 'derecha':
           this.body[0].x += 10;
           this.oldDir = 'izquierda';
          break;
        case 'izquierda':
           this.body[0].x -= 10;
           this.oldDir = 'derecha';
          break;
        case 'arriba':
           this.body[0].y -= 10;
           this.oldDir = 'abajo';
          break;
        case 'abajo':
           this.body[0].y += 10;
           this.oldDir = 'arriba';
          break;
      }
      this.timmer = time + 150;
    }
  }
}
export default Snake;
