import { TEXTURE } from "./constants";

export class MainView extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this._build();
  }

  _build() {
    this._buildBoard();
  }

  _buildBoard() {
    this._buildMoon();
    this._buildEmitter();
    this._buildLogo();
  }

  _buildMoon() {
    const { width: gW, height: gH } = game.config;
    const moon = this.scene.add.sprite(gW / 2, gH / 2, TEXTURE, "moon.png");
    moon.setScale(0.75);
    this.moon = moon;

    this._setMoonInteractivity();
  }

  _buildEmitter() {
    const particles = this.scene.add.particles(TEXTURE, "particle.png");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      alpha: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    this.emitter = emitter;
  }

  _buildLogo() {
    const logo = this.scene.physics.add.image(100, 100, TEXTURE, "js-conf-logo.png");
    logo.setScale(0.25);

    logo.setVelocity(200, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    this.logo = logo;
    this.emitter.startFollow(this.logo);
  }

  _setMoonInteractivity() {
    const { width: mW, height: mH } = this.moon;
    this.moon.setInteractive(new Phaser.Geom.Circle(mW / 2, mH / 2, mW / 2), Phaser.Geom.Circle.Contains);
    this.scene.input.enableDebug(this.moon);

    this.moon.on("pointerdown", () => {
      this.moon.setScale(1);
      this.moon.setTint(0xff0000);
    });

    this.moon.on("pointerup", () => {
      this.moon.setScale(0.75);
      this.moon.clearTint();
    });
  }
}
