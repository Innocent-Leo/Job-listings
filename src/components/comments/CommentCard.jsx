import React from "react";
import { FaPlus, FaMinus, FaReply, FaTrash, FaPen } from "react-icons/fa6";

const CommentCard = ({ comment, currentUser, isReply = true }) => {
  const isOwnComment = comment.user.username === currentUser.username;

  return (
    <div className="mx-auto flex max-w-2xl gap-4 rounded-lg bg-white p-4">
      {/* Score section for large screens */}
      <div className="hidden h-23 flex-col items-center justify-between rounded-lg bg-gray-100 px-2.5 py-2 sm:flex">
        <button>
          <FaPlus className="w-2.5 cursor-pointer text-pink-400 hover:text-purple-800" />
        </button>

        <span className="text-sm font-bold text-purple-800">
          {comment.score}
        </span>

        <button>
          <FaMinus className="w-2.5 cursor-pointer text-pink-400 hover:text-purple-800" />
        </button>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-9" src={comment.user.image.webp} alt="avatar" />

            <span className="font-bold">{comment.user.username}</span>

            {isOwnComment && (
              <span className="rounded-xs bg-purple-800 px-2 pb-0.5 text-xs font-medium text-white">
                you
              </span>
            )}

            <span className="text-sm text-gray-500">{comment.createdAt}</span>
          </div>

          {/* Reply button for large screens */}
          <div className="hidden sm:block">
            {isOwnComment ? (
              <div className="flex items-center gap-4">
                <button className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-red-400 hover:opacity-50">
                  <FaTrash />
                  Delete
                </button>
                <button className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-purple-800 hover:opacity-50">
                  <FaPen />
                  Edit
                </button>
              </div>
            ) : (
              <div className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-purple-800 hover:opacity-50">
                <FaReply className="w-3" />
                <button className="cursor-pointer">Reply</button>
              </div>
            )}
          </div>
        </div>

        {/* Text */}
        <p>
          {isReply && "replyingTo" in comment && (
            <span className="font-semibold text-purple-800">
              @{comment.replyingTo}{" "}
            </span>
          )}
          {comment.content}
        </p>

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
          {isOwnComment ? (
            <div className="flex items-center gap-4">
              <button className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-red-400 hover:opacity-50">
                <FaTrash />
                Delete
              </button>
              <button className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-purple-800 hover:opacity-50">
                <FaPen />
                Edit
              </button>
            </div>
          ) : (
            <div className="flex cursor-pointer items-center gap-1.5 text-sm font-bold text-purple-800 hover:opacity-50 sm:hidden">
              <FaReply className="w-3" />
              <button className="cursor-pointer">Reply</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
