import React from "react";
import { FaPlus, FaMinus, FaReply } from "react-icons/fa6";

const CommentCard = ({ comment }) => {
  return (
    <div className="mx-auto flex max-w-2xl gap-4 rounded-lg bg-white p-4">
      {/* Score section for large screens */}
      <div className="hidden h-23 flex-col items-center justify-between rounded-lg bg-gray-100 px-2.5 py-2 sm:flex">
        <button>
          <FaPlus className="w-2.5 text-pink-400" />
        </button>
        <span className="text-sm font-bold text-purple-800">
          {comment.score}
        </span>
        <button>
          <FaMinus className="w-2.5 text-pink-400" />
        </button>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={comment.user.image.webp} alt="avatar" />
            <span className="font-bold">{comment.user.username}</span>
            <span className="text-sm text-gray-500">{comment.createdAt}</span>
          </div>

          {/* Reply button for large screens */}
          <div className="hidden items-center gap-1.5 font-bold text-purple-800 sm:flex">
            <FaReply className="w-3" />
            <button>Reply</button>
          </div>
        </div>
        <p>{comment.content}</p>

        {/* Score and Reply button for small screens */}
        <div className="flex items-center justify-between sm:hidden">
          {/* Score section for small screens */}
          <div className="flex w-25 items-center justify-between rounded-lg bg-gray-100 px-4 py-2.5 sm:hidden">
            <button>
              <FaPlus className="w-2.5 text-pink-400" />
            </button>
            <span className="text-sm font-bold text-purple-800">
              {comment.score}
            </span>
            <button>
              <FaMinus className="w-2.5 text-pink-400" />
            </button>
          </div>

          {/* Reply button for small screens */}
          <div className="flex items-center gap-1.5 font-bold text-purple-800 sm:hidden">
            <FaReply className="w-3" />
            <button>Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
