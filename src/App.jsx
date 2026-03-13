import React from "react";
import CommentSection from "./components/comments/CommentSection";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-500">
      <CommentSection />
    </div>
  );
};

export default App;
