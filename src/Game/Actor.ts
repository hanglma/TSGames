export default class Actor {
  constructor(protected ctx: CanvasRenderingContext2D, protected canvas: HTMLCanvasElement){}
  act(delta:number): void {
    this.draw();
  }
  draw(): void {}
}