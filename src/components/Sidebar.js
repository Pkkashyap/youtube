import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <div className="mx-2 shadow-lg w-48 p-5">
      <span className="">
        <h1 className="font-bold"> Home</h1>
        <h1 className="font-bold"> Shorts</h1>
        <h1 className="font-bold"> Subscription</h1>
      </span>
      <hr className="my-5" />
      <h1 className="font-bold"> You </h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Play list</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
      <hr className="my-5" />
      <h1 className="font-bold"> Subscription </h1>
      <ul>
        <li>channel 1</li>
        <li>channel 1</li>
        <li>channel 1</li>
        <li>channel 1</li>
        <li>channel 1</li>
        <li>channel 1</li>
      </ul>
    </div>
  );
};
