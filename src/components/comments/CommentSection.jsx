import React from "react";
import CommentList from "./CommentList";
import AddCommentForm from "../form/AddCommentForm";

const CommentSection = () => {
  return (
    <div className="space-y-4">
      <CommentList />
      <AddCommentForm />
    </div>
  );
};

export default CommentSection;
