class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }

    preload() {
        this.load.path = './assets/';
        // this.load.image('cubix_fondo', 'cubix_fondo.png');
        // this.load.image('cubix');
        this.load.image(['cubix', 'cubix_fondo']);
    }

    create() {
        this.cubix = this.add.image(100, 100, 'cubix').setScale(2);
        // this.cubix_fondo = this.add.image(100, 100, 'cubix_fondo');
        // this.cubix_fondo.setOrigin(0.5, 1);

        // this.cubix.flipX = true;
        // this.cubix.setVisible(0)
        // this.cubix.setScale(2, 1);
        // this.cubix.setAlpha(0.4)
        // this.cubix.setTint(0xff0000);
        // this.cubix.x++;
        // this.cubix.y = 200;
        // this.cubix.angle = 10;

        // this.cubix.setDepth(1);
        // console.log(this.cubix);
        // const keyCodes = Phaser.Input.Keyboard.KeyCodes;

        // this.teclaA = this.input.keyboard.addKey(keyCodes.A);
        // this.teclaA.on('down', () => {
        //     console.log('Has presionado la tecla A');
        // });
        // this.teclaA.on('up', () => {
        //     console.log('Has soltado la tecla A');
        // });

        // this.teclas = this.input.keyboard.addKeys({
        //     arriba: keyCodes.UP,
        //     abajo: keyCodes.DOWN,
        //     s: keyCodes.S
        // });

        //EVENTOS PARA LAS TECLAS
        // this.teclas.s.on('down', () => {
        //     console.log('Se ha presionado la S');
        // });
        // this.teclas.arriba.on('down', () => {
        //     console.log('Se ha presionado la ARRIBA');
        // });
        // this.teclas.abajo.on('down', () => {
        //     console.log('Se ha presionado la ABAJO');
        // });

        // this.teclas = this.input.keyboard.addKeys('d,f');
        // this.teclas.d.on('down', () => {
        //     console.log('Has presionado la tecla D');
        // });
        // this.teclas.f.on('down', () => {
        //     console.log('Has presionado la tecla F');
        // });

        // this.input.keyboard.on('keydown', (evento) => {

        //     if (evento.key == 'e') {

        //         console.log('Se ha toca la siguiente tecla ', evento);
        //     }
        // });
        // this.cursor = this.input.keyboard.createCursorKeys();
        // this.cursor.left.on('down', () => {
        //     console.log('Se ha clicado el left');
        // });
        // this.cursor.right.on('down', () => {
        //     console.log('Se ha clicado el right');
        // });

        // this.combo1 = this.input.keyboard.createCombo([keyCodes.DOWN, keyCodes.RIGHT], { resetOnMatch: true });

        // this.combo2 = this.input.keyboard.createCombo([keyCodes.DOWN, keyCodes.UP], { resetOnMatch: true });

        // this.input.keyboard.on('keycombomatch', () => {
        //     console.log('El combo se ha ejecutado');
        // });

        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor.space.on('down', () => {
            this.cubix.setTint(0xff0000);
        });
        this.cursor.space.on('up', () => {
            this.cubix.setTint(0xffffff);
        });

    }

    update(time, delta) {

        if (this.cursor.up.isDown) {
            this.cubix.y -= 2;
        }

        if (this.cursor.down.isDown) {
            this.cubix.y += 2;
        }

        if (this.cursor.left.isDown) {
            this.cubix.x -= 2;
        }

        if (this.cursor.right.isDown) {
            this.cubix.x += 2;
        }

        // this.cubix.y -= 2;
        // if (this.cursor.left.isDown) {
        //     console.log('Se ha clicado el LEFT');
        // }
        // if (this.teclas.arriba.isDown) {
        //     console.log('Se ha presionado la ARRIBA');
        // }

        // if (Phaser.Input.Keyboard.JustDown(this.teclaA)) {
        //     console.log('Has presionado la tecla A');
        // }
        // if (this.teclaA.isDown) {
        //     console.log('Has presionado la tecla A');
        // } else if (this.teclaA.isUp) {
        //     console.log('Has soltado la tecla A');
        // }
    }
}


export default Bootloader;