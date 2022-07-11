import React from "react";
import './ListOfGifs.css';

export default function Gif({ id, title, url }) {
  return (
    <div className="gif-container">
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </div>
  )
}