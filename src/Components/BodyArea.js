import React, { useRef, useState } from "react";
import UsesAi from "../Template_Parts/UsesAi";
import DefaultText from "../Template_Parts/DefaultText";
import Question from "./../Template_Parts/Question";
import Answer from "../Template_Parts/Answer";
import axios from "axios";
import Typing from "./../Template_Parts/Typing";

const BodyArea = () => {
  const inputRef = useRef();
  const you = "you";
  const ai = "ai";
  const [loading, setLoading] = useState();
  const [qna, setQna] = useState([
    // { from: you, value: "me....." },
    // { from: ai, value: "ai....." },
    // {
    //   from: you,
    //   value:
    //     "How do I share property descriptions with my clients in the most effective way",
    // },
    // { from: ai, value: "You can send them by" },
    // {
    //   question:
    //     "How do I share property descriptions with my clients in the most effective way",
    //   answer: "You can send them by",
    // },
    // {
    //   question: "what time is it?",
    //   answer: "See here..........",
    // },
  ]);
  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };
  const handleClick = () => {
    setLoading(true);
    const question = inputRef.current.value;
    updateQNA(you, question);
    axios
      .post("https://talented-veil-newt.cyclic.app/chat", {
        question,
      })
      .then((res) => {
        updateQNA(ai, res.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div class="bg-white py-3 pl-5">
        <h6 class="text-[#0F1C35] font-bold">RealAssit.Ai</h6>
        <p class="text-[#9BA1AE]">
          This is private message, between you and Assistant.
        </p>
      </div>
      <div className="min-h-[89%] flex flex-col justify-between ">
        {/* <UsesAi /> */}
        <div className="overflow-y-auto h-[480px]">
          <DefaultText />

          {qna.map((val) => {
            if (val.from === you) {
              return <Question question={val.value} />;
            } else {
              return <Answer answer={val.value} />;
            }
          })}

          {loading && <Typing />}
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 container mx-auto pl-5 md:mb-6 sm:mb-8 mb-12">
          <div className="col-span-9">
            <input
              ref={inputRef}
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
            <button onClick={handleClick}>
              <img
                src="https://i.ibb.co/jkpWfmG/Group-8431.png"
                alt="Send"
                className="cursor-pointer "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyArea;
