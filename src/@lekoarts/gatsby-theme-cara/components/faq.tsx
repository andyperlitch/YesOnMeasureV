/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";

interface FAQProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      sx={{
        padding: "20px",
        background: expanded ? "#00000077" : "#00000022",
        borderRadius: 15,
        marginBottom: 10,
        cursor: "pointer",
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          background: expanded ? "#00000077" : "#00000055",
        },
      }}
    >
      <div
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          "&:hover": {},
        }}
      >
        {question}
      </div>
      <div
        sx={{
          display: expanded ? "block" : "none",
          fontSize: 18,
          letterSpacing: 0.5,
        }}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQ;
