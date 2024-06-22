/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Singlechaosplay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Singlechaosplay/costumes/costume1.svg", {
        x: 105.81224726547089,
        y: 63.708651413920975,
      }),
    ];

    this.sounds = [new Sound("pop", "./Singlechaosplay/sounds/pop.wav")];

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
        { name: "Game On! (singleplayer)" },
        this.whenIReceiveGameOnSingleplayer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Muktipad" },
        this.whenIReceiveMuktipad
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(999, 999);
    this.visible = false;
    while (!(this.toNumber(this.stage.vars.page) === 2)) {
      yield;
    }
    this.visible = true;
    this.goto(100, -50);
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
    this.broadcast("Game on chaos single");
    this.visible = false;
  }

  *whenIReceiveGameOn() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaotic() {
    this.visible = false;
  }

  *whenIReceiveGameOnSingleplayer() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaosSingle() {
    this.visible = false;
  }

  *whenIReceiveMuktipad() {
    this.visible = false;
  }
}
