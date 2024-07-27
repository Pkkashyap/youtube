import React from "react";

export const SearchListItem = ({ item }) => {
  console.log("item", item);
  const { snippet, id } = item;
  return (
    <div className="flex p-2 m-2">
      <div>
        <img
          className="rounded-lg"
          alt="img"
          src={snippet.thumbnails.medium.url}
        />
      </div>
      <div className="m-2 p-2 w-1/2">
        <h1 className="font-bold text-10">{snippet.description}</h1>
        <h1>{snippet.channelTitle}</h1>
      </div>
    </div>
  );
};
