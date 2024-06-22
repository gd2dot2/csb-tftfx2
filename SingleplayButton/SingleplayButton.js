/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SingleplayButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SingleplayButton/costumes/costume1.svg", {
        x: 86.5,
        y: 66.22008386543251,
      }),
    ];

    this.sounds = [new Sound("pop", "./SingleplayButton/sounds/pop.wav")];

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
        { name: "Game On! (Chaotic)" },
        this.whenIReceiveGameOnChaotic
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.page = 1;
    this.visible = true;
    this.goto(-100, -140);
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
    this.broadcast("Game On! (singleplayer)");
    this.visible = false;
  }

  *whenIReceiveGameOn() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaotic() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaosSingle() {
    this.visible = false;
  }
}
