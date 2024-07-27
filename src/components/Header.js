import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggestion = async () => {
    if (search == "") {
      return;
    }
    console.log("calling", search);
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const res = await data.json();
    console.log(res[1]);
    setSearchSuggestion(res[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-8 m-2 shadow-sm shadow-gray-200">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 cursor-pointer mx-4"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/template-3/menu-59.png"
        />
        <a href="/">
          <img
            className="h-8 cursor-pointer"
            alt="log"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="ml-[220px]">
          <input
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => {
              setShowSuggestion(false);
            }}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="searches"
            placeholder="Search"
            value={search}
            type="text"
            className="w-1/2 border-solid border border-gray-500 p-2 rounded-l-3xl px-4"
          />
          <button className="p-2 border border-gray-500 rounded-r-3xl px-5 py-2 text-black bg-gray-200">
            🔍
          </button>
          {showSuggestion && (
            <div className="fixed py-2 px-5 bg-white w-2/6 shadow-lg rounded-lg border border-gray-100">
              <ul>
                {searchSuggestion.map((ele) => (
                  <li className="py-2 shadow-sm hover:bg-gray-100">🔍 {ele}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};
