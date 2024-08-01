import React from "react";

export const ChatComment = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-8"
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};
