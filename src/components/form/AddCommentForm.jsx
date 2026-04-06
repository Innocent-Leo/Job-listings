import React, { useState } from "react";
import { data } from "../../data";

const AddCommentForm = ({ title = "send", onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onSubmit(content);
    setContent("");
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-4">
      <form onSubmit={handleSubmit} className="">
        {/* For Small Screens */}
        <div className="flex flex-col gap-4 sm:hidden">
          <textarea
            className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-gray-800 focus:outline-none"
            rows="2"
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="flex items-center justify-between">
            <img
              className="h-9 w-9"
              src={data.currentUser.image.webp}
              alt="Your avatar"
            />

            <button
              type="submit"
              className="rounded-md bg-purple-600 px-6 py-2 font-semibold text-white uppercase hover:bg-purple-700"
            >
              Send
            </button>
          </div>
        </div>

        <div className="hidden gap-4 sm:flex">
          <img
            className="h-9 w-9"
            src={data.currentUser.image.webp}
            alt="Your avatar"
          />

          <textarea
            className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-1 focus:ring-gray-800 focus:outline-none"
            rows="2"
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div>
            <button
              type="submit"
              onClick={() => {
                setReplyText("");
                setShowReply(false);
              }}
              className="cursor-pointer rounded-md bg-purple-600 px-6 py-2 text-sm font-semibold text-white uppercase hover:opacity-50"
            >
              {title}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCommentForm;
