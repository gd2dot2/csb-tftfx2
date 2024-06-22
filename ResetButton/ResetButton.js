/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ResetButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ResetButton/costumes/costume1.svg", {
        x: 106.49999999999991,
        y: 65.40424245269017,
      }),
    ];

    this.sounds = [new Sound("pop", "./ResetButton/sounds/pop.wav")];

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
    this.visible = true;
    this.goto(-100, -50);
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
    while (!(this.touching("mouse") && this.mouse.down)) {
      yield;
    }
    this.stage.vars.p1Left = 0;
    this.stage.vars.p2Right = 0;
    this.stage.vars.singleplayerScore = 0;
  }

  *whenIReceiveGameOn() {
    this.visible = false;
  }

  *whenIReceiveGameOnSingleplayer() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaotic() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaosSingle() {
    this.visible = false;
  }
}
