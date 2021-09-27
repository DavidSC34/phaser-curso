class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }

    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {
        this.cubix = this.add.image(100, 100, 'cubix');
        const events = Phaser.Input.Events;
        const keyboard = Phaser.Input.Keyboard;

        //Ocultar o bloquear el mouse en el canvas
        this.input.on(events.POINTER_DOWN, () => {
            this.input.mouse.requestPointerLock();
        });

        this.input.on(events.POINTER_MOVE, (pointer) => {
            // this.cubix.x = pointer.worldX; //->solo funciona cuando no se bloquea el mouse

            //Se suma ya que avanza en coordenadas del canvas, si no se quedaria en lugar fijo
            if (this.input.mouse.locked) {

                this.cubix.x += pointer.movementX;
                this.cubix.y += pointer.movementY;
            }
        });
        //Desbloquea el raton presionando la tecla A
        this.input.keyboard.addKey(keyboard.KeyCodes.A)
            .on('down', () => {
                this.input.mouse.releasePointerLock();
            });



    }

    update(time, delta) {


    }
}


export default Bootloader;