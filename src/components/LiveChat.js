import React, { useEffect } from "react";
import { ChatComment } from "./ChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, getRandomSentence } from "../utils/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: getRandomSentence(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex flex-col-reverse w-full h-[600px] p-2 border border-black bg-slate-100 overflow-y-scroll ">
      {message.map((chat, i) => (
        <ChatComment key={i} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};
