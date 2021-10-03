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
        //Forma alterna de crear un timeline

        this.timeline = this.tweens.timeline({
            targets: [this.cubix],
            // duration: 1000, //--> cada animacion en un segundo
            // totalDuration: 1000,
            // paused: true, //--> de manera interna se auto-inicia
            // duration: 2000,
            loop: -1, //-->  con -1 se ejecuta infinitamente
            tweens: [{
                    x: 300,
                    // duration: 2000, //-> este hara la animacion en 2 segundos
                },
                {
                    y: 300,
                    // offset: "-=500" // le resta la duracion general menos 500
                },
                {
                    x: 100
                },
                {
                    y: 100
                }
            ]
        });
        // this.timeline.play();


        // this.timeline = this.tweens.createTimeline();

        //--> lleva dentro una tween

        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 300,
        //     ease: 'Bounce'

        // });

        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 300
        // });

        // this.timeline.add({
        //     targets: [this.cubix],
        //     x: 100
        // });

        // this.timeline.add({
        //     targets: [this.cubix],
        //     y: 100
        // });

        // this.timeline.play();

    }



    update(time, delta) {


    }
}


export default Bootloader;