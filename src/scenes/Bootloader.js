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
        this.load.spritesheet('tomato', 'tomato/tomato.png', {
            frameWidth: 16,
            frameHeight: 25,
        }); //-->tamaño del recorte en la imagen
        // this.load.spritesheet('tomato_spacing', 'tomato_spacing/tomato_spacing.png', {
        //     frameWidth: 16,
        //     frameHeight: 25,
        //     margin: 1,
        //     spacing: 2
        // }); //-->tamaño del recorte en la imagen
    }

    create() {
        // this.cubix = this.add.image(100, 100, 'cubix');
        this.tomato = this.add.sprite(100, 100, 'tomato', 2).setScale(4);
        // this.tomato_spacing = this.add.sprite(100, 200, 'tomato_spacing', 2).setScale(4);
        //Crar un animacion

        this.anims.create({
            key: 'tomato_walk',
            frames: this.anims.generateFrameNumbers('tomato', {
                // start: 0,
                // end: 7
                frames: [0, 1, 2, 3, 4, 5, 6, 7]
            }),
            repeat: -1,
            frameRate: 15
        });

        this.tomato.anims.play('tomato_walk');
        // this.anims.play('tomato_walk', this.tomato);//--> forma alterna de animar

    }

    update(time, delta) {


    }
}


export default Bootloader;