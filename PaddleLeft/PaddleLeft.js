/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PaddleLeft extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PaddleLeft/costumes/costume1.svg", {
        x: 11,
        y: 43,
      }),
    ];

    this.sounds = [new Sound("pop", "./PaddleLeft/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Muktipad" },
        this.whenIReceiveMuktipad
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On! (Chaotic)" },
        this.whenIReceiveGameOnChaotic2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGameOn() {
    this.visible = true;
    this.goto(-222, 0);
    while (true) {
      this.y +=
        (this.toNumber(this.keyPressed("w")) -
          this.toNumber(this.keyPressed("s"))) *
        Math.floor(1 * this.toNumber(this.stage.vars.ballSpeed));
      yield;
    }
  }

  *whenIReceiveGameOnSingleplayer() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveGameOnChaotic() {
    this.visible = true;
    this.goto(-222, 0);
    while (true) {
      if (this.toNumber(this.stage.vars.unoreversecard) === 0) {
        this.y +=
          (this.toNumber(this.keyPressed("w")) -
            this.toNumber(this.keyPressed("s"))) *
          ((100 / 100) * Math.floor(this.toNumber(this.stage.vars.ballSpeed)));
      } else {
        this.y +=
          (this.toNumber(this.keyPressed("s")) -
            this.toNumber(this.keyPressed("w"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      }
      if (this.toNumber(this.stage.vars.moveleftrightevent) === 1) {
        this.x +=
          (this.toNumber(this.keyPressed("d")) -
            this.toNumber(this.keyPressed("a"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
        if (this.compare(-85, this.x) < 0) {
          this.x += -1 * Math.floor(this.toNumber(this.stage.vars.ballSpeed));
        }
      }
      yield;
    }
  }

  *whenIReceiveGameOnChaosSingle() {
    this.visible = false;
  }

  *whenIReceiveMuktipad() {
    this.visible = true;
    this.goto(-222, 0);
    while (true) {
      this.y +=
        (this.toNumber(this.keyPressed("w")) -
          this.toNumber(this.keyPressed("s"))) *
        Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      yield;
    }
  }

  *whenIReceiveGameOnChaotic2() {
    while (true) {
      this.size = this.toNumber(this.stage.vars.thingSize);
      yield;
    }
  }

  *whenIReceiveGameOnChaosSingle2() {
    while (true) {
      this.size = this.toNumber(this.stage.vars.thingSize);
      yield;
    }
  }
}
