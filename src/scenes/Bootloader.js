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
        this.load.image('contenedor', 'contenedor.png');


    }

    create() {
        this.cubix = this.add.image(300, 100, 'cubix')
            .setScale(0.7)
            .setDepth(2); //--> este valor lo ignora el orden en el contenedor
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this.texto = this.add.text(90, 90, 'PUNTOS 0', {
            fontSize: 30
        });

        const container = this.add.container(0, -300); //--> coordenas en la pantalla container
        container.add([
            this.contenedor,
            this.cubix, //--> el valor setDepth(2), es ignorado aqui
            this.texto
        ]);
        // container.setScale(2)
        //--> Colocar todos los objetos en un contenedor y aplicar el tween
        //una animacion a todo el contenido de
        this.add.tween({
            targets: [container],
            ease: 'Bounce',
            y: 100
        });

    }



    update(time, delta) {

    }
}


export default Bootloader;