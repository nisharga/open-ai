import React from "react";

const NavArea = ({ chat, startChat }) => {
  return (
    <>
      <div className="text-center mt-3">
        <button
          onClick={() => startChat(!chat)}
          className={`${
            !chat
              ? "bg-transparent hover:bg-[#443DF6]"
              : "hover:bg-transparent bg-[#443DF6]"
          }  btn-block
         text-white font-semibold hover:text-white py-2 
         md:px-14 sm:px-8 px-6 border border-white hover:border-transparent 
         rounded mt-2`}
        >
          {chat ? "End Chat" : "New Chat"}
        </button>
      </div>
      <div className="mb-6">
        <div className="">
          <hr />
          <div className="container mx-auto ml-6 gap-4 py-4 space-y-3">
            <h5 className="">Account</h5>
            <h6 className="">Contact US</h6>
            <button
              className="bg-white hover:bg-[#443DF6] text-[#0F1C35] 
            font-semibold hover:text-white py-2 md:px-14 sm:px-8 px-6  
            border border-white hover:border-transparent rounded
            "
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavArea;
