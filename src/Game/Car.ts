import Actor from './Actor.ts'

export default class Car extends Actor{
  private vx: number=2
  private vy: number=0
  constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, private x:number, private y:number){
    super(ctx, canvas)
  }
  act(delta: number) {
    this.x += this.vx
    this.y += this.vy
    this.draw();
  }
  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'rgba(250,0,0,0.4)';
    this.ctx.fill();
  }
  setSpeedVector(x: number, y: number){
    this.vx = x * 2;
    this.vy = y * 2;
  }
}
