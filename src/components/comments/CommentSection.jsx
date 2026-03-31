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

  const handleReply = (parentId, content, replyingTo) => {
    setComments((prev) =>
      updateComments(prev, parentId, (comment) => ({
        ...comment,
        replies: [
          ...comment.replies,
          {
            id: Date.now(),
            content,
            createdAt: "just now",
            score: 0,
            replyingTo,
            user: currentUser,
          },
        ],
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
        onReply={handleReply}
      />
      <AddCommentForm />
    </div>
  );
};

export default CommentSection;
