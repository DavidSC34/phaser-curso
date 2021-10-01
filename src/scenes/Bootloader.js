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
        //Ya que usamos una herramienta para generar atlas y animacion, la usamos
        this.load.atlas('tomato', 'tomato/tomato.png', 'tomato/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato/tomato_anim.json');
    }

    create() {

        this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);
        this.tomato.anims.play('tomato_walk'); //-->nombre que esta en el json
        //Crear un animacion, forma sin usar la herramienta de generar animaciones

        // this.anims.create({
        //     key: 'tomato_walk',
        //     frames: this.anims.generateFrameNames('tomato', {
        //         // suffix: '.png',
        //         prefix: 'tomato_animation_1_',
        //         start: 0,
        //         end: 7,

        //     }),
        //     repeat: -1,
        //     frameRate: 15
        // });

        // this.tomato.anims.play('tomato_walk');
        // this.anims.play('tomato_walk', this.tomato);//--> forma alterna de animar

    }

    update(time, delta) {


    }
}


export default Bootloader;