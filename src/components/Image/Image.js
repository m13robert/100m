import React from "react";

export default function Image({ url, alt }) {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
}
