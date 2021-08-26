import React, {useState} from "react";

const ErrorGenerator = ({bookstoreService}) => {
  const [doError, setDoError] = useState(false);

  if (doError) {
    return this.foo.bar;
  }
  return (
    <button className="btn btn-danger" onClick={() => {
      setDoError(true);
    }}>Throw Error</button>
  );
};

export default ErrorGenerator;
