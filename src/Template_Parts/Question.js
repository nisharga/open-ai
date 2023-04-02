import React from "react";
import Time from "./Time";

const Question = ({ question }) => {
  return (
    <div className="bg-[#fff] md:py-5 p-3 px-4">
      <div>
        <p>{question}</p>
      </div>
      <div className="pt-2">
        <p className="text-xs">
          <Time date={new Date()} />
        </p>
      </div>
    </div>
  );
};

export default Question;
