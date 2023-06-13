import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="text-2xl border-2 border-black p-2 m-4 rounded-lg transition hover:scale-125"
      type="button"
    >
      <a href="/posts">{text}</a>
    </button>
  );
};

export default Button;
