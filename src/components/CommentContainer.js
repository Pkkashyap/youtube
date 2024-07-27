import React from "react";

const list = [
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [
          {
            name: "Pankaj",
            text: "lorem ipsum ",
            replies: [
              {
                name: "Pankaj",
                text: "lorem ipsum ",
                replies: [
                  {
                    name: "Pankaj",
                    text: "lorem ipsum ",
                    replies: [],
                  },
                  {
                    name: "Pankaj",
                    text: "lorem ipsum ",
                    replies: [],
                  },
                ],
              },
              {
                name: "Pankaj",
                text: "lorem ipsum ",
                replies: [],
              },
              {
                name: "Pankaj",
                text: "lorem ipsum ",
                replies: [],
              },
            ],
          },
          {
            name: "Pankaj",
            text: "lorem ipsum ",
            replies: [],
          },
          {
            name: "Pankaj",
            text: "lorem ipsum ",
            replies: [],
          },
        ],
      },
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [],
      },
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [],
      },
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [
          {
            name: "Pankaj",
            text: "lorem ipsum ",
            replies: [],
          },
        ],
      },
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [],
      },
    ],
  },
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [],
  },
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [],
  },
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [],
  },
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [
      {
        name: "Pankaj",
        text: "lorem ipsum ",
        replies: [],
      },
    ],
  },
  {
    name: "Pankaj",
    text: "lorem ipsum ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 m-2 bg-gray-100">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      />
      <div className="p-2 h-2">
        <h1>{name}</h1>
        {text}
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="px-5 m-2 border-l-2 border-black">
      <Comment data={comment} />
      <div>
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export const CommentContainer = () => {
  return (
    <div>
      <h1 className="font font-bold">Comments:</h1>
      <CommentList comments={list} />
    </div>
  );
};
