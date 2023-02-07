import React, { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/faceRecognition/faceRecognition";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import Rank from "./components/rank/rank";
import Particle from "./components/particles/particle";
import "./app.css";
import Clarifai from "./components/clarifai/clarifai";

const App = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const [box, setBox] = useState<Box>();

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(ev.target.value);
  };
  const onButtonSubmit = async () => {
    if (input === "") {
      return;
    }
    setImageUrl(input);
    const faceLocation = await Clarifai(input);
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
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
};

export default App;
