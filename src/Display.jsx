import React from "react";

export default function Display({ input }) {
  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="0"
        disabled
        className="rounded-t-md w-full border border-black bg-slate-300 p-2 text-right text-3xl text-blue-500 placeholder-slate-50"
      />
    </>
  );
}
