import React from "react";

const NavArea = () => {
  return (
    <>
      <div class="text-center mt-3">
        <button class="bg-transparent hover:bg-[#443DF6] text-white font-semibold hover:text-white py-2 md:px-8 px-4 border border-white hover:border-transparent rounded">
          New Chat
        </button>
      </div>
      <div class="mb-6">
        <div class="">
          <hr />
          <div class="container mx-auto ml-6 gap-4">
            <h5>Account</h5>
            <a href="">Contact US</a>
            <br />
            <button class="bg-white hover:bg-[#443DF6] text-[#0F1C35] font-semibold hover:text-white py-2 md:px-10 px-4 border border-white hover:border-transparent rounded">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavArea;
