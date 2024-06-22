import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import MenuPopUp from "./MenuPopUp/MenuPopUp.js";
import PlayButton from "./PlayButton/PlayButton.js";
import ResetButton from "./ResetButton/ResetButton.js";
import Singlechaosplay from "./Singlechaosplay/Singlechaosplay.js";
import SingleplayButton from "./SingleplayButton/SingleplayButton.js";
import ChaoticplayButton from "./ChaoticplayButton/ChaoticplayButton.js";
import Ball from "./Ball/Ball.js";
import PaddleLeft from "./PaddleLeft/PaddleLeft.js";
import PaddleRight from "./PaddleRight/PaddleRight.js";
import PaddleUp from "./PaddleUp/PaddleUp.js";
import BorderRight from "./BorderRight/BorderRight.js";
import Announcements from "./Announcements/Announcements.js";
import MoreButton from "./MoreButton/MoreButton.js";
import MultiplayButton from "./MultiplayButton/MultiplayButton.js";
import PaddleDown from "./PaddleDown/PaddleDown.js";
import BorderLeft from "./BorderLeft/BorderLeft.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  MenuPopUp: new MenuPopUp({
    x: 0,
    y: 90,
    direction: 110,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  PlayButton: new PlayButton({
    x: 302,
    y: 195,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 3,
  }),
  ResetButton: new ResetButton({
    x: 320,
    y: 195,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 2,
  }),
  Singlechaosplay: new Singlechaosplay({
    x: 100,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 89.99999999999996,
    visible: false,
    layerOrder: 13,
  }),
  SingleplayButton: new SingleplayButton({
    x: 302,
    y: 195,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 15,
  }),
  ChaoticplayButton: new ChaoticplayButton({
    x: -100,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 12,
  }),
  Ball: new Ball({
    x: -220.83896263269247,
    y: -97.95590686260273,
    direction: -63,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  PaddleLeft: new PaddleLeft({
    x: -222,
    y: -76,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8,
  }),
  PaddleRight: new PaddleRight({
    x: 222,
    y: 72,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  PaddleUp: new PaddleUp({
    x: -84,
    y: 162,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  BorderRight: new BorderRight({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 9,
  }),
  Announcements: new Announcements({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16,
  }),
  MoreButton: new MoreButton({
    x: 302,
    y: 195,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 89.99999999999996,
    visible: false,
    layerOrder: 14,
  }),
  MultiplayButton: new MultiplayButton({
    x: -100,
    y: -140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 89.99999999999996,
    visible: false,
    layerOrder: 11,
  }),
  PaddleDown: new PaddleDown({
    x: 22,
    y: -162,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  BorderLeft: new BorderLeft({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 10,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
