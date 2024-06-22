/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.p1Left = 8;
    this.vars.p2Right = 10;
    this.vars.ballSpeed = 6.499999999999995;
    this.vars.singleplayerScore = 0;
    this.vars.clicksTillEasterEgg = 5;
    this.vars.event = 6;
    this.vars.dodge = 0;
    this.vars.unoreversecard = 0;
    this.vars.sornoball = 0;
    this.vars.clones = 0;
    this.vars.moveleftrightevent = 0;
    this.vars.page = 2;
    this.vars.thingSize = 100;

    this.watchers.p1Left = new Watcher({
      label: "p1 (left)",
      style: "normal",
      visible: true,
      value: () => this.vars.p1Left,
      x: 240,
      y: 180,
    });
    this.watchers.p2Right = new Watcher({
      label: "p2 (right)",
      style: "normal",
      visible: true,
      value: () => this.vars.p2Right,
      x: 600,
      y: 180,
    });
    this.watchers.singleplayerScore = new Watcher({
      label: "SINGLEPLAYER SCORE",
      style: "normal",
      visible: false,
      value: () => this.vars.singleplayerScore,
      x: 373,
      y: 180,
    });
    this.watchers.clones = new Watcher({
      label: "clones",
      style: "normal",
      visible: false,
      value: () => this.vars.clones,
      x: 245,
      y: 175,
    });
  }
}
