import { Game } from './Game.ts'
import Joystick from '../joystick/Joystick.ts'
import World1 from './World1.ts'

export class Controls {
    private joystick: Joystick
    constructor(private game: Game){
        this.initGui();
        
        // setup Joystick
        const div_joystick = document.getElementById('#joystick')!;
        const options = {
            scale: 1,
            color: "#000000",
            strokeColor: "#ffffff"
        };
        this.joystick = new Joystick(div_joystick, options)

        this.setupCar1();
        this.setupCar2();
    }
    private initGui() {
        const startButton = document.querySelector<HTMLButtonElement>('#startGame')!
        startButton.addEventListener('click', () => this.game.start())
        const stopButton = document.querySelector<HTMLButtonElement>('#stopGame')!
        stopButton.addEventListener('click', () => this.game.stop())
    }
    private setupCar1() {

        this.joystick.on("start", () => {
            document.querySelector("#state")!.innerHTML = "moving!";
        });

        this.joystick.on("end", () => {
            document.querySelector("#state")!.innerHTML = "standing still";
        });

        this.joystick.on("change", () => {
            document.querySelector("#vector")!.innerHTML = this.joystick.directionVector().x + ', ' + this.joystick.directionVector().y;
            document.querySelector("#value")!.innerHTML = this.joystick.displacementValue().toString();
            document.querySelector("#radians")!.innerHTML = this.joystick.directionAngleRads() || '-';
            document.querySelector("#degrees")!.innerHTML = this.joystick.directionAngleDegs() || '-';
            document.querySelector("#direction")!.innerHTML = this.joystick.direction() || '-';
            (this.game.world as World1).car1.setSpeedVector(this.joystick.directionVector().x, this.joystick.directionVector().y)
        });
    }
    private setupCar2() {
        // capture event, damit eventuelle cursor-Tasten den Bildschirm nicht scrollen
        document.addEventListener("keydown", (event: KeyboardEvent) => {
            this.game.consolePrint(event.code)
            if (event.code === "KeyA" && event.repeat === false) {
                (this.game.world as World1).car2.setSpeedVector(-1, 0)
            } else if (event.code === "KeyD" && event.repeat === false) {
                (this.game.world as World1).car2.setSpeedVector(1, 0)
            } else if (event.code === "KeyW" && event.repeat === false) {
                (this.game.world as World1).car2.setSpeedVector(0, -1)
            } else if (event.code === "KeyS" && event.repeat === false) {
                (this.game.world as World1).car2.setSpeedVector(0, 1)
            }
        }, {capture: true});
    }
}