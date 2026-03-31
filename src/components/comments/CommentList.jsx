import React from "react";
import CommentThread from "./CommentThread";

const CommentList = ({
  comments,
  currentUser,
  setComments,
  onVote,
  onReply,
}) => {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      {comments.map((comment) => (
        <CommentThread
          key={comment.id}
          comment={comment}
          currentUser={currentUser}
          setComments={setComments}
          onVote={onVote}
          isReply={false}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default CommentList;
