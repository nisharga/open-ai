import React from "react";
import Time from "../Template_Parts/Time";
import UsesAi from "../Template_Parts/UsesAi";

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
        {/* <UsesAi /> */}
        <div className="overflow-y-auto h-[480px]">
          <div className="ai-replay bg-[#9BA1AE] md:py-5 p-3 px-4 ">
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
          <div className="man-replay bg-[#fff] md:py-5 p-3 px-4">
            <div>
              <p>
                How do I share property descriptions with my clients in the most
                effective way
              </p>
            </div>
            <div className="pt-2">
              <p className="text-xs">
                <Time date={new Date()} />
              </p>
            </div>
          </div>
          <div className="ai-replay bg-[#9BA1AE] md:py-5 p-3 px-4 ">
            <div>
              <p>You can send them by </p>
            </div>
            <div className="pt-2">
              <p className="text-xs">
                <Time date={new Date()} />
              </p>
            </div>
          </div>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            dolor ex sequi. Unde, exercitationem laborum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nemo officia accusantium
            corporis, qui illo repudiandae culpa reprehenderit soluta,
            reiciendis quibusdam modi? Quae excepturi esse ad neque, saepe
            obcaecati aliquam numquam aspernatur nisi quidem! Animi debitis in
            quod nostrum doloremque nesciunt facere aliquid dolorem pariatur
            voluptatem aut suscipit quibusdam, natus ab ullam! Voluptas itaque
            quia vel cumque. Odio quo cum laborum officia nostrum sunt
            asperiores eveniet alias iusto doloremque voluptates optio
            reprehenderit itaque tempore hic, perferendis illo quasi culpa
            commodi sapiente voluptas eaque? Totam minus illo velit error
            laudantium enim neque officia, fugit cum dolorem repellat delectus
            optio aperiam, quisquam eaque aliquam. Aspernatur nam similique
            harum recusandae voluptas. Dolor, facilis voluptate iure iste
            recusandae vitae ut voluptas possimus qui dolores similique sequi
            harum cumque doloremque suscipit, autem a illum tempora rerum fugit?
            Similique sint repellendus doloremque aspernatur eveniet excepturi
            cumque amet error officiis quod dolores expedita, provident vero
            accusamus quasi nam est autem reprehenderit eligendi? Consequuntur
            atque sequi eum minima quasi libero earum repellendus ducimus modi,
            exercitationem molestiae a vel dicta commodi non ipsam delectus
            ullam! Aperiam dicta nesciunt vel praesentium dolore, natus
            consectetur nemo minima aspernatur et ipsam modi quae illum facilis
            nihil iure illo nostrum quo placeat iusto sunt quasi ad sit?
            Quaerat, laboriosam. Unde perspiciatis illum consectetur cumque quia
            ipsa nisi tenetur ducimus commodi, aspernatur repudiandae possimus.
            Facilis deleniti quasi cumque, reiciendis illum eius est totam quia
            tempora sunt laborum autem ratione nam delectus quam tempore
            voluptas, blanditiis, distinctio deserunt? Commodi excepturi
            similique sit enim eius expedita obcaecati? Neque, autem
            repudiandae. Totam, ipsum beatae sapiente modi dolores molestias
            tenetur perferendis quia voluptate deserunt, debitis voluptatum
            eaque aperiam. Eius adipisci fugiat, recusandae deleniti eos
            consequuntur totam quo itaque minus ipsum voluptates facilis aliquam
            reiciendis corrupti nesciunt accusantium tempore dolore. Repellat
            beatae repellendus nisi eum minus quae tenetur praesentium facilis!
          </h2>
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
