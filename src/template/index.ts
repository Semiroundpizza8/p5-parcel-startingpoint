import p5 from "p5";

export default function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, 725);
    p.noLoop();
    p.noStroke();
  };
  p.draw = function () {
    p.background(160);
  };
}
