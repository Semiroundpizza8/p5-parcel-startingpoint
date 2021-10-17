import partMap from "./partMap";

export default (data) => {
  console.log(data[0][1][0]);
  return data.map((frame) => {
    const newFrameData = {
      name: frame[0],
      parts: [],
    };

    const partData = frame[1][0];
    if (partData) {
      const poseKeypoints = partData.pose_keypoints_2d;
      for (var i = 0; i < poseKeypoints.length; i += 3) {
        const x = poseKeypoints[i];
        const y = poseKeypoints[i + 1];
        const confidence = poseKeypoints[i + 2];
        newFrameData.parts.push({
          x,
          y,
          confidence,
          part: partMap[Math.floor(i / 3)],
        });
      }
    }
    return newFrameData;
  });
};
