class Food{
  constructor(scene){
    this.scene = scene;
    this.comida = this.scene.physics.add.group({
      key: 'Papitas',
      setXY: {
        x: 30,
        y: 30
      },
    })
    this.comida = this.scene.physics.add.group({
      key: 'Sushi',
      setXY: {
        x: 50,
        y: 50
      },
    })
    this.comida = this.scene.physics.add.group({
      key: 'Hanb',
      setXY: {
        x: 70,
        y: 70
      },
    })
    this.comida = this.scene.physics.add.group({
      key: 'Taco',
      setXY: {
        x: 90,
        y: 90
      },
    })
  }
}

export default Food;
