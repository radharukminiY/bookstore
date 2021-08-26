import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb} from "@fortawesome/free-solid-svg-icons";

const ErrorIndicator = () => {
  return (
    <div className="text-center">
      <FontAwesomeIcon icon={faBomb} size="5x" color="tomato" className="mb-3"/>
      <p>
        Ops... Something went wrong.
      </p>
    </div>
  );
}

export default ErrorIndicator;
