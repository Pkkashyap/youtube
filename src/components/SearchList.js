import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_LIST } from "../utils/constants";
import { SearchListItem } from "./SearchListItem";
import { Link } from "react-router-dom";

export const SearchList = () => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_LIST + "valorant");
    const res = await data.json();
    setSearchList(res.items);
    console.log(res.items);
  };

  if (searchList.length == 0) return <div>No Result</div>;
  return (
    <div className="mx-20 px-10 py-10">
      {searchList.map((searchItem) => (
        <Link to={"/watch?v=" + searchItem.id.videoId}>
          <SearchListItem key={searchItem.id} item={searchItem} />
        </Link>
      ))}
    </div>
  );
};
