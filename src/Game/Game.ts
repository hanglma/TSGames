// https://www.sandromaglione.com/articles/game-rendering-loop-in-typescript

import World1 from './World1.ts'
import World from './World.ts'

export class Game {
    private lastTime: number | null = null;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private animationFrameId: number | null = null;
    world: World;

    constructor(id: string="canvas"){
        this.canvas = document.getElementById(id) as HTMLCanvasElement;
        // this.canvas = document.querySelector<HTMLCanvasElement>(id)!;
        this.ctx = this.canvas.getContext("2d")!;
        this.world = new World1(this.ctx, this.canvas);
        this.world.init()
    }

    public start() {
        this.animationFrameId = window.requestAnimationFrame( this.update.bind(this) );
    }
    public stop() {
        window.cancelAnimationFrame(this.animationFrameId!)
    }

    private update = (timestamp: number) => {
        if (this.lastTime !== null) {
            const delta = timestamp - this.lastTime;
            this.world.act(delta);
        }
        this.lastTime = timestamp;
        this.animationFrameId = window.requestAnimationFrame( this.update );
    }
    public consolePrint(text: string){
        document.querySelector("#console")!.innerHTML = text
    }
 
}