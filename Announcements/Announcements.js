/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Announcements extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./Announcements/costumes/blank.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("dodgeball", "./Announcements/costumes/dodgeball.svg", {
        x: 117.76498374864573,
        y: 33.59075617754473,
      }),
      new Costume("speedup", "./Announcements/costumes/speedup.svg", {
        x: 94.29738499999999,
        y: 33.1960943021393,
      }),
      new Costume("slowdown", "./Announcements/costumes/slowdown.svg", {
        x: 111.36478499999998,
        y: 33.1960943021393,
      }),
      new Costume("reverse", "./Announcements/costumes/reverse.svg", {
        x: 87.89710999999997,
        y: 33.1960943021393,
      }),
      new Costume("fullmovement", "./Announcements/costumes/fullmovement.svg", {
        x: 156.16670999999997,
        y: 33.19609430213927,
      }),
      new Costume("minigame", "./Announcements/costumes/minigame.svg", {
        x: 98.56423499999997,
        y: 33.1960943021393,
      }),
    ];

    this.sounds = [
      new Sound("Video Game 1", "./Announcements/sounds/Video Game 1.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On! (Chaotic)" },
        this.whenIReceiveGameOnChaotic
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle
      ),
    ];
  }

  *whenIReceiveGameOnChaotic() {
    this.goto(0, 0);
    this.costume = "blank";
    this.visible = true;
    this.costume = "blank";
    this.stage.vars.moveleftrightevent = 0;
    this.stage.vars.thingSize = 100;
    while (true) {
      yield* this.wait(this.random(7.5, 15.25));
      this.stage.vars.event = this.random(1, 6);
      if (this.toNumber(this.stage.vars.event) === 1) {
        this.costume = "dodgeball";
        yield* this.wait(0.1);
        this.stage.vars.dodge = 1;
        yield* this.wait(this.random(10, 20));
        this.stage.vars.dodge = 0;
        this.costume = "blank";
      } else {
        if (this.toNumber(this.stage.vars.event) === 2) {
          this.costume = "speedup";
          yield* this.wait(0.5);
          this.stage.vars.ballSpeed =
            this.toNumber(this.stage.vars.ballSpeed) * 1.75;
          yield* this.wait(this.random(5, 15));
          this.stage.vars.ballSpeed =
            this.toNumber(this.stage.vars.ballSpeed) / 1.75;
          this.costume = "blank";
        } else {
          if (this.toNumber(this.stage.vars.event) === 3) {
            this.costume = "slowdown";
            yield* this.wait(0.5);
            this.stage.vars.ballSpeed =
              this.toNumber(this.stage.vars.ballSpeed) / 1.75;
            yield* this.wait(this.random(5, 15));
            this.stage.vars.ballSpeed =
              this.toNumber(this.stage.vars.ballSpeed) * 1.75;
            this.costume = "blank";
          } else {
            if (this.toNumber(this.stage.vars.event) === 4) {
              this.costume = "reverse";
              yield* this.wait(0.5);
              this.stage.vars.unoreversecard = 1;
              yield* this.wait(this.random(10, 20));
              this.stage.vars.unoreversecard = 0;
              this.costume = "blank";
            } else {
              if (this.toNumber(this.stage.vars.event) === 5) {
                this.costume = "fullmovement";
                yield* this.wait(0.5);
                this.stage.vars.moveleftrightevent = 1;
                yield* this.wait(this.random(5, 15));
                this.stage.vars.moveleftrightevent = 0;
                this.costume = "blank";
              } else {
                this.costume = "minigame";
                yield* this.wait(0.5);
                this.stage.vars.thingSize = 50;
                yield* this.wait(20);
                this.stage.vars.thingSize = 100;
                this.costume = "blank";
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.clones.visible = false;
    this.stage.vars.dodge = 0;
    this.stage.vars.unoreversecard = 0;
    this.stage.vars.thingSize = 100;
    this.visible = false;
    while (true) {
      if (this.keyPressed("m")) {
        yield* this.playSoundUntilDone("Video Game 1");
      }
      yield;
    }
  }

  *whenIReceiveGameOnChaosSingle() {
    this.goto(0, 0);
    this.costume = "blank";
    this.visible = true;
    this.costume = "blank";
    while (true) {
      yield* this.wait(this.random(7.5, 15.25));
      this.stage.vars.event = this.random(1, 5);
      if (this.toNumber(this.stage.vars.event) === 1) {
        null;
      } else {
        if (this.toNumber(this.stage.vars.event) === 2) {
          this.costume = "speedup";
          yield* this.wait(0.5);
          this.stage.vars.ballSpeed =
            this.toNumber(this.stage.vars.ballSpeed) * 1.75;
          yield* this.wait(this.random(5, 15));
          this.stage.vars.ballSpeed =
            this.toNumber(this.stage.vars.ballSpeed) / 1.75;
          this.costume = "blank";
        } else {
          if (this.toNumber(this.stage.vars.event) === 3) {
            this.costume = "slowdown";
            yield* this.wait(0.5);
            this.stage.vars.ballSpeed =
              this.toNumber(this.stage.vars.ballSpeed) / 1.75;
            yield* this.wait(this.random(5, 15));
            this.stage.vars.ballSpeed =
              this.toNumber(this.stage.vars.ballSpeed) * 1.75;
            this.costume = "blank";
          } else {
            if (this.toNumber(this.stage.vars.event) === 4) {
              this.costume = "reverse";
              yield* this.wait(0.5);
              this.stage.vars.unoreversecard = 1;
              yield* this.wait(this.random(10, 20));
              this.stage.vars.unoreversecard = 0;
              this.costume = "blank";
            } else {
              this.costume = "minigame";
              yield* this.wait(0.5);
              this.stage.vars.thingSize = 50;
              yield* this.wait(20);
              this.stage.vars.thingSize = 100;
              this.costume = "blank";
            }
          }
        }
      }
      yield;
    }
  }
}
