import React from "react";
import PropTypes from "prop-types";

export default function Go({ queryOnClick }) {
  return (
    <>
      <button onClick={ queryOnClick }>Query!</button>
    </>
  );
}

Go.propTypes = {
  queryOnClick: PropTypes.func.isRequired
};
