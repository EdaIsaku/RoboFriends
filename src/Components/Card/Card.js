import React from "react";
import "tachyons";

const Card = ({ id, name, email }) => {
  return (
    <div className="grow tc bg-light-green dib pa3 ma2 br3 shadow-hover">
      <img alt="robot" src={`https://robohash.org/${id}.png?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
