import React from "react";
import CommentThread from "./CommentThread";
import { data } from "../../data";
// import { useState } from "react";

const CommentList = () => {
  //   const [comments, setComments] = useState(data.comments);
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      {data.comments.map((comment) => (
        <CommentThread
          key={comment.id}
          comment={comment}
          currentUser={data.currentUser}
        />
      ))}
    </div>
  );
};

export default CommentList;
