/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BorderLeft extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BorderLeft/costumes/costume1.svg", {
        x: 324.805575,
        y: 198.843765,
      }),
      new Costume("costume2", "./BorderLeft/costumes/costume2.svg", {
        x: 261,
        y: 201,
      }),
    ];

    this.sounds = [new Sound("pop", "./BorderLeft/sounds/pop.wav")];

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
