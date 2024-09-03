"use client";

import { useState } from "react";

const CommentInput = () => {
  const [comment, setComment] = useState();

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <div className="flex flex-col gap-2 w-[350px] md:w-[500px]">
      <label htmlFor="textarea_comment" className="text-color-primary">Comment</label>
      <textarea
        name=""
        id="textarea_comment"
        cols="30"
        rows="10"
        onChange={handleInput}
        className="h-32 p-2 text-md"
      />
      <button className="py-2 px-3 bg-color-accent w-32" onClick={handleSubmit}>
        Posting
      </button>
    </div>
  );
};

export default CommentInput;
