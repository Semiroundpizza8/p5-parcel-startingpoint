export const drawPose = (p, frame) => {
  for (var i = 0; i < frame.parts.length; i++) {
    const part = frame.parts[i];
    // p.circle(part.x, part.y, 15);
    p.fill(255);
    p.text(part.part, part.x, part.y);
  }
};
