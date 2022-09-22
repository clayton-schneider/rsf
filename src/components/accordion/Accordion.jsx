import { everyoneFAQ } from "./faqs";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <ul className="my-0 mx-auto">
      {everyoneFAQ.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  );
}
