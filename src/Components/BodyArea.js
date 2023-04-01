import React from "react";

const BodyArea = () => {
  return (
    <>
      <div class="bg-white py-3 pl-5">
        <h6 class="text-[#0F1C35] font-bold">RealAssit.Ai</h6>
        <p class="text-[#9BA1AE]">
          This is private message, between you and Assistant.
        </p>
      </div>
      <div className="min-h-[89%] flex flex-col justify-between ">
        <div>
          <h2 class="text-xl text-[#000] font-bold pl-5 pt-5">
            Example of types of question to ask RealAssist
          </h2>
          <div class="mt-4 grid grid-cols-2 gap-4 container mx-auto pl-5">
            <div class="bg-white flex flex-row rounded-md p-2 justify-around">
              <h6 class="font-bold">
                Creating blog content specific to real estate
              </h6>
              <img src="https://i.ibb.co/pX978hH/Base.png" alt="alt" />
            </div>
            <div class="bg-white flex flex-row rounded-md p-2 justify-around">
              <h6 class="font-bold">
                Creating blog content specific to real estate
              </h6>
              <img src="https://i.ibb.co/pX978hH/Base.png" alt="alt" />
            </div>
            <div class="bg-white flex flex-row rounded-md p-2 justify-around">
              <h6 class="font-bold">
                Creating blog content specific to real estate
              </h6>
              <img src="https://i.ibb.co/pX978hH/Base.png" alt="alt" />
            </div>
            <div class="bg-white flex flex-row rounded-md p-2 justify-around">
              <h6 class="font-bold">
                Creating blog content specific to real estate
              </h6>
              <img src="https://i.ibb.co/pX978hH/Base.png" alt="alt" />
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 container mx-auto pl-5 md:mb-6 sm:mb-8 mb-12">
          <div className="col-span-9">
            <input
              type="search"
              name="search"
              class="p-4 text-sm text-black bg-[#fff] rounded-md 
          focus:outline-none focus:text-gray-900
          w-full"
              autocomplete="off"
              placeholder="Ask RealAssist Something"
            />
          </div>
          <div className="col-span-3">
            <img
              src="https://i.ibb.co/jkpWfmG/Group-8431.png"
              alt="Send"
              className="cursor-pointer "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyArea;
