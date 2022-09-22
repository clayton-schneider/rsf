import React, { useRef } from "react";

export default function AccordionItem({ faq, onToggle, active }) {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`mt-5 rounded bg-white py-8 px-5`}>
      <button
        className={`transition-all flex w-full cursor-pointer flex-wrap items-center
        justify-between text-left text-xl font-bold  duration-300 
        ${
          active
            ? "text-green-700 hover:text-gray-600"
            : "text-gray-600 hover:text-green-600"
        }`}
        onClick={onToggle}
      >
        {question}
        <span className="text-2xl">{active ? "-" : "+"}</span>
      </button>
      <div
        ref={contentEl}
        className="h-0 overflow-hidden text-lg transition-all duration-300 ease-in"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div>{answer}</div>
      </div>
    </li>
  );
}
