import React, { useRef } from "react";
import NavArea from "./Components/NavArea";
import BodyArea from "./Components/BodyArea";

const Main = () => {
  const inputRef = useRef();
  return (
    <div class="grid grid-cols-12">
      <div class="md:col-span-3 col-span-5 h-screen flex flex-col justify-between bg-[#0F1C35] text-white">
        <NavArea />
      </div>
      <div class="bg-[#CCD3E0] md:col-span-9 col-span-7">
        <BodyArea />
      </div>
    </div>
  );
};

export default Main;
