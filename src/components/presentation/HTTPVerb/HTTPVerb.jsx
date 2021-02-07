import React from "react";
import PropTypes from "prop-types";

export default function HTTPVerb({ method }) {
  return (
    <>
      <label htmlFor={method}>{method}</label>
      <input id={method} type="radio"/>
    </>
  );
}

HTTPVerb.propTypes = {
  method: PropTypes.string.isRequired
};