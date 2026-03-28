import React from "react";
import CommentCard from "./CommentCard";

const CommentThread = ({ comment, currentUser, onVote, isReply = false }) => {
  return (
    <>
      <CommentCard
        comment={comment}
        currentUser={currentUser}
        onVote={onVote}
        isReply={isReply}
      />
      {comment.replies?.length > 0 && (
        <div className="space-y-4 border-l-2 border-gray-200 pl-4 sm:ml-8 sm:pl-8">
          {comment.replies.map((reply) => (
            <CommentThread
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              onVote={onVote}
              isReply={true}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentThread;
