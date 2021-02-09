import React from "react";
import PropTypes from "prop-types";

export default function HTTPMethod({ method }) {
  return (
    <>
      <label htmlFor={method}>{method}</label>
      <input
        id={method}
        type="radio"
        name="method"
        value={method}
      />
    </>
  );
}

HTTPMethod.propTypes = {
  method: PropTypes.string.isRequired
};
