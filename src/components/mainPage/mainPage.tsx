import React, { ReactElement, useState } from "react";
import Navigation from "../navigation/navigation";
import FaceRecognition from "../faceRecognition/faceRecognition";
import Logo from "../logo/logo";
import ImageLinkForm from "../imageLinkForm/imageLinkForm";
import Clarifai from "../clarifai/clarifai";

import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const MainPage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState(false);
  const [box, setBox] = useState<Box | null>(null);
  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(ev.target.value);
  };
  const onButtonSubmit = async () => {
    if (input === "") {
      return;
    }
    setImageUrl(input);
    setBox(null);
    setError(false);
    const faceLocation = await Clarifai(input);
    if (faceLocation === null) {
      setError(true);
    } else {
      setError(false);
    }
    setBox(faceLocation);
  };
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ErrorBoundry status={error} />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
};

export default MainPage;
