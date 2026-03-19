import React from "react";
import CommentCard from "./CommentCard";

const CommentThread = ({ comment, currentUser }) => {
  return (
    <>
      <CommentCard comment={comment} currentUser={currentUser} />
      {comment.replies?.length > 0 && (
        <div className="space-y-4 border-l-2 border-gray-200 pl-4 sm:ml-8 sm:pl-8">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentThread;
