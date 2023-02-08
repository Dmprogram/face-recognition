import React from "react";
import "./faceRecognition.css";
import "..//clarifai/types";
interface ImageUrlProps {
  imageUrl: string;
  box: Box | null;
}

const FaceRecognition = ({ imageUrl, box }: ImageUrlProps) => {
  return (
    <div className="center ma2">
      <div className="absolute mt2">
        <img className="imageInput" src={imageUrl} alt="" />
        <div
          className="bounding-box"
          style={{
            top: box?.topRow,
            right: box?.rightCol,
            bottom: box?.bottomRow,
            left: box?.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
