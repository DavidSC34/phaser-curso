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
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.cubix_fondo = this.add.image(100, 200, 'cubix_fondo').setInteractive();
        const eventos = Phaser.Input.Events;
        // console.log(eventos);

        this.input.on(eventos.POINTER_DOWN, (evento) => {
            console.log("Se ha clicado en el canvas");
            // console.log(evento);
        });
        this.input.on(eventos.POINTER_UP, (evento) => {
            console.log("Se ha levantado el puntero  en el canvas");

        });
        this.input.on(eventos.POINTER_MOVE, (evento) => {
            // console.log("Se ha movido el puntero  en el canvas");
            if (evento.isDown) {

                this.cubix.x = evento.worldX;
                this.cubix.y = evento.worldY;
            }

        });
        //Eventos para saber si estoy fuera del canvas

        this.input.on(eventos.GAME_OVER, () => {
            console.log('has entrado en el lienzo');
        });
        this.input.on(eventos.GAME_OUT, () => {
            console.log('has salido en el lienzo');
        });

        //pARA SABER SI SE da click fuera del canvas
        this.input.on(eventos.POINTER_DOWN_OUTSIDE, () => {
            console.log('HAZ CLICADO FUERA DEL LIENZCO');
        });
        this.input.on(eventos.POINTER_UP_OUTSIDE, () => {
            console.log('HAS LEVANTADO FUERA DEL LIENZO');
        });

        //Para hacer los objetpos del lienzco interactivos, poner
        //setInteractive()

        // this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
        //     gameObject.setTint(0x00ff00);
        // });
        // this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });

        //UN OVER EN EL OBJECTO

        // this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
        //     gameObject.setTint(0x0000ff);
        // });
        // this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        // });


        //-->se usa function(){} para que funcione el this
        this.cubix.on(eventos.POINTER_DOWN, function() {
            this.setTint(0x00ff00);
        });
        this.cubix.on(eventos.POINTER_UP, function() {
            this.clearTint();
        });


    }

    update(time, delta) {


    }
}


export default Bootloader;