import React from "react";
import PropTypes from "prop-types";


export default function Response({ response }) {
  return (
    <p>{JSON.stringify(response)}</p>
  );
}

Response.propTypes = {
  response: PropTypes.string
};
