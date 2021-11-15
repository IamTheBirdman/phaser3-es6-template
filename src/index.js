import Phaser from "phaser";
import { Game } from "./game";

const { innerWidth, innerHeight } = window;

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: innerWidth,
  height: innerHeight,
  backgroundColor: "#353535",
  scene: [],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
    },
  },
};

window.game = new Game(config);
