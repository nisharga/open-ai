import React from "react";
import Time from "./Time";

const Answer = ({ answer }) => {
  return (
    <div className="ai-replay bg-[#9BA1AE] md:py-5 p-3 px-4 ">
      <div>
        <p>{answer} </p>
      </div>
      <div className="pt-2">
        <p className="text-xs">
          <Time date={new Date()} />
        </p>
      </div>
    </div>
  );
};

export default Answer;
