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
        //cargar el dropzone boot
        this.load.image('drop', 'drop.png');
    }

    create() {
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.input.setDraggable(this.cubix); //--> hacer draggable el objeto

        this.drop = this.add.image(100, 250, 'drop').setDepth(-1).setInteractive();
        //convertir el objeto en un objeto de dropzone
        this.drop.input.dropZone = true;


        const eventos = Phaser.Input.Events;
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(0.7);
        });
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });

        this.input.on(eventos.DRAG_END, (pointer, obj, dropZone) => {

            //Si no esta en la zona de dropzone, regrese al punto de partida

            if (!dropZone) {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
            }
            //regresar el objeto a su tamaño normal
            obj.setScale(1);

        });

        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropZone) => {
            dropZone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropZone) => {
            dropZone.clearTint();
        });
        this.input.on(eventos.DROP, (pointer, obj, dropZone) => {
            obj.x = dropZone.x;
            obj.y = dropZone.y;

        });




    }

    update(time, delta) {


    }
}


export default Bootloader;