import React from "react";
import Card from "../Card/Card";

const Cards = ({ robots }) => {
  //it shows an error to the user because of the Error Boundry
  // if (true) {
  //   throw new Error("ooh no");
  // }
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default Cards;
