import React from "react";
import CommentCard from "./CommentCard";

const CommentThread = ({ comment }) => {
  return (
    <>
      <CommentCard comment={comment} />
      {comment.replies?.length > 0 && (
        <div className="ml-8 space-y-4 border-l-2 border-gray-200 pl-8">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentThread;
