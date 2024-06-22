/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PaddleDown extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PaddleDown/costumes/costume1.svg", {
        x: 42.99999999999997,
        y: 10.999999999999972,
      }),
    ];

    this.sounds = [new Sound("pop", "./PaddleDown/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Muktipad" },
        this.whenIReceiveMuktipad
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMuktipad() {
    this.visible = true;
    this.goto(0, -162);
    while (true) {
      this.x +=
        (this.toNumber(this.keyPressed("right arrow")) -
          this.toNumber(this.keyPressed("left arrow"))) *
        Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      yield;
    }
  }
}
