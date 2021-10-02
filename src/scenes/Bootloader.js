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

        this.cubix = this.add.sprite(100, 100, 'cubix');
        // this.cubix_fondo = this.add.sprite(180, 100, 'cubix_fondo');
        //
        this.tweens = this.add.tween({
            targets: [this.cubix],
            duration: 1000,
            // ease: 'Bounce',
            y: 300,
            // x: {
            //     value: 200,
            //     ease: 'Elastic',
            //     duration: 3000
            // },
            repeat: 0, //repeticion infinita
            yoyo: true,
            // delay: 1000,
            // hold: 1000,
            // repeatDelay: 1000 //antes de repetir vuelve,
            onStart: () => {
                console.log('Inicia la tween');
            },
            onRepeat: () => {
                console.log('Se ha repetido');
            },
            onYoyo: (tween, obj, target) => {
                target.setTint(0xff0000);
                console.log('Se ha hecho YOYO');
            },
            onComplete: (tween, obj, target) => {
                // target.setTint(0xff0000);
                console.log('Se ha completado el tween');
            },
            // onCompleteParams: [this.cubix] //--> cuando usamos parametros en la funciones
            onYoyoParams: [this.cubix]

        });
    }



    update(time, delta) {


    }
}


export default Bootloader;