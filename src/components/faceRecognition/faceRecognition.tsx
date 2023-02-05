import React from "react";
interface ImageUrlProps {
  imageUrl: string;
}

const FaceRecognition = ({ imageUrl }: ImageUrlProps) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="" width="500px" height="auto"></img>
      </div>
    </div>
  );
};

export default FaceRecognition;
