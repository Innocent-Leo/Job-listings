import React from "react";
import { useState } from "react";
import { data } from "../../data";
import CommentList from "./CommentList";
import AddCommentForm from "../form/AddCommentForm";

const CommentSection = () => {
  const [comments, setComments] = useState(data.comments);
  const currentUser = data.currentUser;

  const updateComments = (comments, id, callback) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return callback(comment);
      }

      if (comment.replies?.length > 0) {
        return {
          ...comment,
          replies: updateComments(comment.replies, id, callback),
        };
      }

      return comment;
    });
  };

  const handleVote = (id, type) => {
    setComments((prev) =>
      updateComments(prev, id, (comment) => ({
        ...comment,
        score: type === "up" ? comment.score + 1 : comment.score - 1,
      })),
    );
  };

  return (
    <div className="space-y-4">
      <CommentList
        comments={comments}
        currentUser={currentUser}
        setComments={setComments}
        onVote={handleVote}
      />
      <AddCommentForm />
    </div>
  );
};

export default CommentSection;
