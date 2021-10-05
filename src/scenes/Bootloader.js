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
        //cargar la fuente(imagen)
        this.load.image('fuente', 'fuentes/fuente.png');
        this.load.json('fuente_json', 'fuentes/fuente.json'); //--> solo lo carga en memoria

    }

    create() {
        const fuenteConfig = this.cache.json.get('fuente_json');
        console.log(fuenteConfig);
        this.cache.bitmapFont.add('nombreFuente', Phaser.GameObjects.RetroFont.Parse(this, fuenteConfig)); //-->nombre interno para llamar la fuente

        this.texto = this.add.bitmapText(100, 100, 'nombreFuente', ' PUNTOS 0', 30, 0).setTint(0xffEE00); //-->ultimo parametro  es alineacion (0:izq, 1:centrado,2:derecha)

        //-->cambiar de color se pone tinte
        // this.texto.setText('Soy el nuevo texto');//--> no sabe de minusculas
        // this.texto.setText('SOY EL NUEVO TEXTO');
        this.puntos = 0;


    }



    update(time, delta) {
        // this.puntos++;
        // this.texto.setText('PUNTOS ' + this.puntos);
    }
}


export default Bootloader;