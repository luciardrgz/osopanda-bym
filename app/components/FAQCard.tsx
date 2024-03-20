"use client";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FAQCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion-item rounded-xl px-4 bg-white text-[#7288a2] text-[1.15rem] relative block font-normal">
      <button
        id="accordion-button-1"
        className={`faq-button hover:cursor-pointer text-darkgreen hover:font-bold ${
          expanded ? "aria-expanded='true'" : "aria-expanded='false'"
        }`}
        onClick={toggleAccordion}
      >
        <span className="accordion-title">{question}</span>
        <FontAwesomeIcon
          icon={expanded ? faMinusCircle : faPlusCircle}
          className="icon mr-4"
          aria-hidden="true"
        />
      </button>
      <div
        className={`accordion-content opacity-0 max-h-[0] overflow-hidden transition-opacity duration-200 ${
          expanded ? "opacity-100 max-h-[200px] border-t-2 border-[#3a7869]" : ""
        }`}
      >
        <p className="text-[1rem] my-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
