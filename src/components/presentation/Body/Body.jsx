import React from "react";

export default function Body() {
  return (
    <>
      <label htmlFor="body"></label>
      <input
        id="body"
        type="text"
        defaultValue="Enter request body here."
      />
    </>
  );
}
