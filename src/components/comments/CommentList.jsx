import React from "react";
import CommentThread from "./CommentThread";

const CommentList = ({ comments, currentUser, setComments, onVote }) => {
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
        />
      ))}
    </div>
  );
};

export default CommentList;
