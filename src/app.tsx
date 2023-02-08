import React, { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/faceRecognition/faceRecognition";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import Rank from "./components/rank/rank";
import Particle from "./components/particles/particle";
import "./app.css";
import Clarifai from "./components/clarifai/clarifai";
import "./components/clarifai/types";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

const App = () => {
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
    const faceLocation = await Clarifai(input);
    if (faceLocation === null) {
      setError(true);
    } else {
      setError(false);
    }
    setBox(faceLocation);
  };
  return (
    <div className="App">
      <Particle />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ErrorBoundry status={error} />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
};

export default App;
