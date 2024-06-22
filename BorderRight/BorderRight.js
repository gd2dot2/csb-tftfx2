/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BorderRight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BorderRight/costumes/costume1.svg", {
        x: -238.500005,
        y: 189.84374499999998,
      }),
      new Costume("costume2", "./BorderRight/costumes/costume2.svg", {
        x: 116,
        y: 116,
      }),
    ];

    this.sounds = [new Sound("pop", "./BorderRight/sounds/pop.wav")];

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
    this.costume = "costume1";
  }

  *whenIReceiveMuktipad() {
    this.costume = "costume2";
  }
}
