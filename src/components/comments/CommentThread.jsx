import React from "react";
import CommentCard from "./CommentCard";

const CommentThread = ({ comment }) => {
  return (
    <>
      <CommentCard comment={comment} />
    </>
  );
};

export default CommentThread;
