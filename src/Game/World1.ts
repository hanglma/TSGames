// https://iamschulz.com/writing-a-game-in-typescript/
import World from './World.ts'
import Car from './Car.ts'

export default class World1 extends World{
  car1: Car
  car2: Car
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    super(ctx, canvas)
    this.car1 = new Car(ctx, canvas, 100, 100);
    this.car2 = new Car(ctx, canvas, 400, 100);
    this.add(this.car1)
    this.add(this.car2)
  }
  draw() {
    // alles löschen
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
