import Bootloader from './scenes/Bootloader.js';
const config = {
    title: 'Curos Phaser',
    url: 'http://google.com',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: '640',
    height: '360',
    paren: 'contenedor',
    pixelArt: true,
    backgroundColor: '#34495e',
    banner: {
        hidePhaser: true,
        text: '#fff00f',
        background: ['#16a085', '#2ecc71', '#e74c3c', '#000000']
    },
    //con Phaser 3 permite modularizar
    scene: [Bootloader]
};

const game = new Phaser.Game(config);