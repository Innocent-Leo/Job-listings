import React from "react";
import CommentThread from "./CommentThread";
import { data } from "../../data";
import { useState } from "react";

const CommentList = () => {
  const [comments, setComments] = useState(data.comments);
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
