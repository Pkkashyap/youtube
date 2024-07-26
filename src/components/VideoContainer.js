import React, { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const res = await data.json();
    setVideos(res.items);
  };

  return (
    <div className="px-10 py-5 flex flex-wrap">
      {videos.length != 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};
