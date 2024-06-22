/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MoreButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MoreButton/costumes/costume1.svg", {
        x: 86.5,
        y: 64.12590103994773,
      }),
    ];

    this.sounds = [new Sound("pop", "./MoreButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On!" },
        this.whenIReceiveGameOn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On! (singleplayer)" },
        this.whenIReceiveGameOnSingleplayer
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.page = 1;
    this.visible = true;
    this.stage.vars.page = 1;
    this.goto(100, -140);
    this.size = 90;
    while (true) {
      if (this.touching("mouse")) {
        while (!(this.size === 130 || !this.touching("mouse"))) {
          this.size += 8;
          yield;
        }
      } else {
        while (!(this.size === 90 || this.touching("mouse"))) {
          this.size -= 8;
          yield;
        }
      }
      if (this.toNumber(this.stage.vars.page) === 2) {
        this.goto(999, 999);
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (
      !(
        this.touching("mouse") &&
        this.mouse.down &&
        this.compare(this.mouse.y, 100) < 0
      )
    ) {
      yield;
    }
    this.stage.vars.page = 2;
    this.visible = false;
  }

  *whenIReceiveGameOn() {
    this.visible = false;
  }

  *whenIReceiveGameOnSingleplayer() {
    this.visible = false;
  }
}
