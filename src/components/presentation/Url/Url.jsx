import React from "react";

export default function Url() {
  return (
    <>
      <label htmlFor="url">Request URL: </label>
      <input
        id="url"
        type="text"
        name="url"
        placeholder="URL"
      />
    </>
  );
}
