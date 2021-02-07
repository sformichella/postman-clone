import React from "react";

export default function Body() {
  return (
    <>
      <label htmlFor="body"></label>
      <input
        id="body"
        type="text"
        name="body"
        placeholder="Enter request body here."
      />
    </>
  );
}
