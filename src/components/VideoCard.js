import React from "react";

export const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-72 p-2 m-2 shadow-md">
      <img alt="thumnails" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.round(statistics.viewCount / 1000)}k views</li>
      </ul>
    </div>
  );
};
