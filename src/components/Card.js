import React from "react";

const Card = ({ title, link, image }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
        <p>
          <code>{"<"}</code>
          {title}
          <code>{"/>"}</code>
        </p>
      </a>
    </div>
  );
};

export default Card;
