import { Scene, GameObjects } from 'phaser';
import {EAssets} from "../assets";

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(512, 384, EAssets.BACK_GROUND);

        this.logo = this.add.image(512, 300, EAssets.LOGO);

        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            console.log("start('Game')")

            // this.scene.start('Game');

        });
    }
}
