import React from "react";
import NavArea from "./Components/NavArea";
import BodyArea from "./Components/BodyArea";

const Main = () => {
  return (
    <div class="mt-4 grid grid-cols-12">
      <div class="bg-[#0F1C35] col-span-3 h-screen text-white flex flex-col justify-between">
        <NavArea />
      </div>
      <div class="bg-[#CCD3E0] col-span-9">
        <BodyArea />
      </div>
    </div>
  );
};

export default Main;
