import React from "react";
import Time from "./Time";

const DefaultText = () => {
  return (
    <div className="default_text bg-[#9BA1AE] md:py-5 p-3 px-4 ">
      <div className="flex">
        <p>Hey, this Real Assist AI, How I can help you?</p>
        <img
          src="https://i.ibb.co/n3RtnCj/copy.png"
          alt="icon"
          className="md:w-6 md:ml-3 invisible md:visible"
        />
      </div>
      <div className="pt-2">
        <p className="text-xs">
          <Time date={new Date()} />
        </p>
      </div>
    </div>
  );
};

export default DefaultText;
