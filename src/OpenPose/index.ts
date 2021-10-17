import { drawPose } from "./drawPose";
import json from "./outputs/combined.json";
import normalizeOpenPose from "./normalizeOpenPose";

export default function (p) {
  let fps = 30;
  let poseFrames = 0;
  let data = [];

  p.preload = () => {
    data = normalizeOpenPose(json);
  };

  p.setup = () => {
    p.frameRate(fps);
    p.createCanvas(852, 480);
    p.colorMode(p.HSB);

    //example of pose coordinates
    poseFrames = Object.keys(data).length;
    p.noStroke();
    p.background(0, 0, 0);
  };

  p.draw = () => {
    const frameToPaint = data[(p.frameCount - 1) % poseFrames];
    p.background(0, 0, 0, 1);
    drawPose(p, frameToPaint);
  };
};