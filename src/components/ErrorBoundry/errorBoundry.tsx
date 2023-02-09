import React, { ReactElement } from "react";
import "./error.css";

interface ErrorProps {
  status: boolean;
}

const ErrorBoundry = ({ status }: ErrorProps): ReactElement => {
  if (status === true) {
    return (
      <div>
        <h2 className="error">
          Couldn't recognize face in the picture or invalid URL
        </h2>
      </div>
    );
  }
  return <div></div>;
};

export default ErrorBoundry;
