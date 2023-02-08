import "./types";
const calculateFaceLocation = (data: Api): Box => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

  const image = document.querySelector(".imageInput") as HTMLImageElement;

  const width: number = image.width;
  const height: number = image.height;

  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height,
  };
};

export default calculateFaceLocation;
