/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PaddleRight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PaddleRight/costumes/costume1.svg", {
        x: 11,
        y: 43,
      }),
    ];

    this.sounds = [new Sound("pop", "./PaddleRight/sounds/pop.wav")];

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
    this.stage.watchers.p1Left.visible = true;
    this.stage.watchers.p2Right.visible = true;
    this.visible = true;
    this.goto(222, 0);
    while (true) {
      this.y +=
        (this.toNumber(this.keyPressed("up arrow")) -
          this.toNumber(this.keyPressed("down arrow"))) *
        Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      yield;
    }
  }

  *whenIReceiveGameOnSingleplayer() {
    this.stage.watchers.singleplayerScore.visible = true;
    this.visible = true;
    this.goto(222, 0);
    while (true) {
      this.y +=
        (this.toNumber(this.keyPressed("up arrow")) -
          this.toNumber(this.keyPressed("down arrow"))) *
        Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      yield;
    }
  }

  *whenIReceiveGameOnChaotic() {
    this.stage.watchers.p1Left.visible = true;
    this.stage.watchers.p2Right.visible = true;
    this.visible = true;
    this.goto(222, 0);
    while (true) {
      if (this.toNumber(this.stage.vars.unoreversecard) === 0) {
        this.y +=
          (this.toNumber(this.keyPressed("up arrow")) -
            this.toNumber(this.keyPressed("down arrow"))) *
          ((100 / 100) * Math.floor(this.toNumber(this.stage.vars.ballSpeed)));
      } else {
        this.y +=
          (this.toNumber(this.keyPressed("down arrow")) -
            this.toNumber(this.keyPressed("up arrow"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      }
      if (this.toNumber(this.stage.vars.moveleftrightevent) === 1) {
        this.x +=
          (this.toNumber(this.keyPressed("right arrow")) -
            this.toNumber(this.keyPressed("left arrow"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
        if (this.compare(this.x, 85) < 0) {
          this.x += Math.floor(this.toNumber(this.stage.vars.ballSpeed));
        }
      }
      yield;
    }
  }

  *whenIReceiveGameOnChaosSingle() {
    this.stage.watchers.singleplayerScore.visible = true;
    this.visible = true;
    this.goto(222, 0);
    while (true) {
      if (this.toNumber(this.stage.vars.unoreversecard) === 0) {
        this.y +=
          (this.toNumber(this.keyPressed("up arrow")) -
            this.toNumber(this.keyPressed("down arrow"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      } else {
        this.y +=
          (this.toNumber(this.keyPressed("down arrow")) -
            this.toNumber(this.keyPressed("up arrow"))) *
          Math.floor(this.toNumber(this.stage.vars.ballSpeed));
      }
      yield;
    }
  }

  *whenIReceiveMuktipad() {
    this.stage.watchers.p1Left.visible = true;
    this.stage.watchers.p2Right.visible = true;
    this.visible = true;
    this.goto(222, 0);
    while (true) {
      this.y +=
        (this.toNumber(this.keyPressed("up arrow")) -
          this.toNumber(this.keyPressed("down arrow"))) *
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
