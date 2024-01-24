import Actor from './Actor.ts'

export default class World extends Actor{
  private members: Array<Actor> = new Array()
  constructor(protected ctx: CanvasRenderingContext2D, protected canvas: HTMLCanvasElement){
    super(ctx, canvas)
  }
  init(): void {
    this.draw();
    this.members.forEach(actor => actor.draw())
  }
  act(delta:number): void {
    this.draw();
    this.members.forEach(actor => actor.act(delta))
  }
  draw(): void { }
  add(actor: Actor){
    this.members.push(actor);
  }
}
