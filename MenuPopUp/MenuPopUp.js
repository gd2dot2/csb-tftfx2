/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MenuPopUp extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MenuPopUp/costumes/costume1.svg", {
        x: 167.3749999999999,
        y: 62.79375810623162,
      }),
    ];

    this.sounds = [new Sound("Meow", "./MenuPopUp/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Muktipad" },
        this.whenIReceiveMuktipad
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On!" },
        this.whenIReceiveGameOn
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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

  *whenIReceiveMuktipad() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.singleplayerScore = 0;
    this.stage.vars.clicksTillEasterEgg = 5;
    this.stage.watchers.singleplayerScore.visible = false;
    this.stage.watchers.p1Left.visible = false;
    this.stage.watchers.p2Right.visible = false;
    this.visible = true;
    this.goto(0, 90);
    this.direction = 70;
    while (true) {
      if (this.compare(this.stage.vars.clicksTillEasterEgg, 0) > 0) {
        yield* this.menuRotate();
      }
      yield;
    }
  }

  *menuRotate() {
    yield* this.wait(0.4);
    for (let i = 0; i < 6; i++) {
      this.direction += 5;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.direction += 2.5;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.direction += 1.25;
      yield;
    }
    yield* this.wait(0.4);
    for (let i = 0; i < 6; i++) {
      this.direction -= 5;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.direction -= 2.5;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.direction -= 1.25;
      yield;
    }
  }

  *whenIReceiveGameOn() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.vars.clicksTillEasterEgg--;
    if (this.toNumber(this.stage.vars.clicksTillEasterEgg) === 0) {
      for (let i = 0; i < 30; i++) {
        this.y -= 8;
        yield;
      }
    }
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
