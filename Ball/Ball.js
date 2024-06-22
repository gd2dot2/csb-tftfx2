/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ball/costumes/costume1.svg", {
        x: 15.5,
        y: 15.5,
      }),
    ];

    this.sounds = [
      new Sound("Lose", "./Ball/sounds/Lose.wav"),
      new Sound("Bounce", "./Ball/sounds/Bounce.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On!" },
        this.whenIReceiveGameOn
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On! (Chaotic)" },
        this.whenIReceiveGameOnChaotic
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game On! (singleplayer)" },
        this.whenIReceiveGameOnSingleplayer
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
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on chaos single" },
        this.whenIReceiveGameOnChaosSingle2
      ),
    ];

    this.vars.ballspeed = 5.599999999999998;
  }

  *whenIReceiveGameOn() {
    yield* this.playSoundUntilDone("Lose");
    this.stage.vars.ballSpeed = 5;
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.random(-180, 180);
    while (true) {
      this.move(this.toNumber(this.stage.vars.ballSpeed));
      this.ifOnEdgeBounce();
      if (
        this.touching(this.sprites["PaddleLeft"].andClones()) ||
        this.touching(this.sprites["PaddleRight"].andClones())
      ) {
        if (this.compare(0.05, this.timer) < 0) {
          this.stage.vars.ballSpeed += 0.05;
        }
        this.restartTimer();
        yield* this.startSound("Bounce");
        this.direction += this.random(80, 100);
      }
      if (this.touching(this.sprites["BorderLeft"].andClones())) {
        this.stage.vars.p2Right++;
        yield* this.playSoundUntilDone("Lose");
        /* TODO: Implement stop all */ null;
      }
      if (this.touching(this.sprites["BorderRight"].andClones())) {
        this.stage.vars.p1Left++;
        yield* this.playSoundUntilDone("Lose");
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGameOnChaosSingle() {
    yield* this.playSoundUntilDone("Lose");
    this.stage.vars.sornoball = "s";
    this.restartTimer();
    this.stage.vars.ballSpeed = 5.5;
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.random(-180, 180);
    while (true) {
      this.move(this.toNumber(this.stage.vars.ballSpeed));
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["PaddleRight"].andClones())) {
        if (this.toNumber(this.stage.vars.dodge) === 0) {
          if (this.compare(0.05, this.timer) < 0) {
            if (this.random(1, 15) === 1) {
              this.createClone();
            }
            this.stage.vars.ballSpeed += 0.33;
            this.stage.vars.singleplayerScore++;
          }
        } else {
          yield* this.playSoundUntilDone("Lose");
          /* TODO: Implement stop all */ null;
        }
        this.restartTimer();
        yield* this.startSound("Bounce");
        this.direction += this.random(80, 100);
      }
      if (this.toNumber(this.stage.vars.dodge) === 0) {
        if (this.touching(this.sprites["BorderRight"].andClones())) {
          yield* this.playSoundUntilDone("Lose");
          /* TODO: Implement stop all */ null;
        }
      } else {
        this.stage.vars.singleplayerScore++;
        this.stage.vars.ballSpeed += 0.33;
      }
      yield;
    }
  }

  *whenIReceiveGameOnChaotic() {
    yield* this.playSoundUntilDone("Lose");
    this.stage.vars.sornoball = 0;
    this.stage.vars.ballSpeed = 5;
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.random(-180, 180);
    while (true) {
      this.move(
        this.toNumber(this.stage.vars.ballSpeed) * ((100 / 100 + 100 / 100) / 2)
      );
      this.ifOnEdgeBounce();
      if (
        this.touching(this.sprites["PaddleLeft"].andClones()) ||
        this.touching(this.sprites["PaddleRight"].andClones())
      ) {
        if (this.toNumber(this.stage.vars.dodge) === 0) {
          this.direction += 180;
          if (this.compare(0.05, this.timer) < 0) {
            if (this.random(1, 15) === 1) {
              this.createClone();
            }
            this.stage.vars.ballSpeed += 0.1;
          }
          this.restartTimer();
          this.direction += 180;
          this.ifOnEdgeBounce();
          yield* this.startSound("Bounce");
          this.direction += this.random(75, 105);
          this.ifOnEdgeBounce();
        } else {
          if (this.touching(this.sprites["PaddleLeft"].andClones())) {
            this.stage.vars.p2Right++;
            yield* this.playSoundUntilDone("Lose");
            /* TODO: Implement stop all */ null;
          } else {
            this.stage.vars.p1Left++;
            yield* this.playSoundUntilDone("Lose");
            /* TODO: Implement stop all */ null;
          }
        }
      }
      if (this.toNumber(this.stage.vars.dodge) === 0) {
        if (this.touching(this.sprites["BorderLeft"].andClones())) {
          this.stage.vars.p2Right++;
          yield* this.playSoundUntilDone("Lose");
          /* TODO: Implement stop all */ null;
        }
        if (this.touching(this.sprites["BorderRight"].andClones())) {
          this.stage.vars.p1Left++;
          yield* this.playSoundUntilDone("Lose");
          /* TODO: Implement stop all */ null;
        }
      }
      yield;
    }
  }

  *startAsClone() {
    this.direction = this.random(-179, 180);
    this.stage.vars.clones++;
    yield* this.wait(1);
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.clones = 0;
  }

  *whenIReceiveGameOnSingleplayer() {
    yield* this.playSoundUntilDone("Lose");
    this.restartTimer();
    this.stage.vars.ballSpeed = 5;
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.random(-180, 180);
    while (true) {
      this.move(this.toNumber(this.stage.vars.ballSpeed));
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["PaddleRight"].andClones())) {
        if (this.compare(0.05, this.timer) < 0) {
          this.stage.vars.ballSpeed += 0.1;
          this.stage.vars.singleplayerScore++;
        }
        this.restartTimer();
        yield* this.startSound("Bounce");
        this.direction += this.random(80, 100);
      }
      if (this.touching(this.sprites["BorderRight"].andClones())) {
        yield* this.playSoundUntilDone("Lose");
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveMuktipad() {
    yield* this.playSoundUntilDone("Lose");
    this.stage.vars.ballSpeed = 5;
    this.visible = true;
    this.goto(0, 0);
    this.direction = this.random(-180, 180);
    while (true) {
      this.move(this.toNumber(this.stage.vars.ballSpeed));
      this.ifOnEdgeBounce();
      if (
        this.touching(this.sprites["PaddleLeft"].andClones()) ||
        this.touching(this.sprites["PaddleUp"].andClones()) ||
        this.touching(this.sprites["PaddleRight"].andClones()) ||
        this.touching(this.sprites["PaddleDown"].andClones())
      ) {
        if (this.compare(0.05, this.timer) < 0) {
          this.stage.vars.ballSpeed += 0.05;
        }
        this.restartTimer();
        yield* this.startSound("Bounce");
        this.direction += this.random(80, 100);
      }
      if (this.touching(this.sprites["BorderLeft"].andClones())) {
        this.stage.vars.p2Right++;
        yield* this.playSoundUntilDone("Lose");
        /* TODO: Implement stop all */ null;
      }
      if (this.touching(this.sprites["BorderRight"].andClones())) {
        this.stage.vars.p1Left++;
        yield* this.playSoundUntilDone("Lose");
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveGameOnChaotic2() {
    this.visible = true;
    while (true) {
      this.size = this.toNumber(this.stage.vars.thingSize);
      yield;
    }
  }

  *startAsClone2() {
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
