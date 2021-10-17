# p5 Parcel Starting Point

This is a basic sketchbook using p5 as a canvas abstraction and Parcel as a bundler.

## Getting Started
- Download this folder off of github
- Run `npm install` to grab p5 and the Parcel bundler
- Run `npm start` to open up a localhost port with your project in it

## Important Files

The main files to pay attention to when creating quick canvas sketches within this repo are `src/OpenPose` and `src/template`

### src/OpenPose
- Contains a shaved-down version of the OpenPose p5 Anima example we used in class, only including the logic to draw circles at key bodyparts
- Includes a tiny `normalizeOpenPose` util that'll convert the combine json that we created in class into something more readable (goes from nested arrays to an array of frames with an array of bodyparts.)
    - Note: It might make sense to refactor the parts into an object with keys describing the body part we're currently drawing later on. That was my original intention, though I *think* the map I pulled off of the (Keypoints in C++ and Python Section of the OpenPose Docs)[https://cmu-perceptual-computing-lab.github.io/openpose/web/html/doc/md_doc_02_output.html#body-keypoints-in-c-python] doesn't line up correctly with the combine.json data we created (either that or my dancer grew a nose on their knee... which all things considered would be cooler). If anyone has more insight into this I'd love some quick feedback.

### src/template
- A minimalistic starting-point for a running p5 app.
- My general workflow is to duplicate this file as a starting point every time I want to start a p5 project from scratch, turning the src folder into a collection of "pages" I can flip through by swapping the import in my index.ts. I'm hoping to eventually set up a way to swap between the projects within src using tabs for fancy portfolio magic but thats a later problem. 