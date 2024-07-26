import React from "react";
import { Button } from "./Button";

const list = [
  "Games",
  "Songs",
  "Valorant",
  "trailers",
  "News",
  "Channels",
  "Songs",
  "Valorant",
  "trailers",
  "News",
];

export const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-2">
      {list.map((ele) => (
        <Button name={ele} />
      ))}
    </div>
  );
};
