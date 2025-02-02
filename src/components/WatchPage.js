import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const [searchQuery] = useSearchParams();
  console.log();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div>
          <iframe
            className="mx-10"
            width="1400"
            height="600"
            src={"https://www.youtube.com/embed/" + searchQuery.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full ">
          <LiveChat />
        </div>
      </div>

      <div className="m-2 mx-10 p-2">
        <CommentContainer></CommentContainer>
      </div>
    </div>
  );
};
