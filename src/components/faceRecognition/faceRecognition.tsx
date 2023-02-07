import React from "react";
import "./faceRecognition.css";
interface ImageUrlProps {
  imageUrl: string;
  box: Box | undefined;
}

const FaceRecognition = ({ imageUrl, box }: ImageUrlProps) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          className="imageInput"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
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
