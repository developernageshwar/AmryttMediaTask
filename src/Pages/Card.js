import React from "react";
import Card1 from "../assets/Content.jpg";
import Card2 from "../assets/ContentImg.webp";
import Card3 from "../assets/ContentScr.jpg";

const Card = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Card1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                React Developer
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Nageshwar khedkar
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem tempore magni quis autem ducimus reprehenderit
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Card2}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                React Developer
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Nageshwar khedkar
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem tempore magni quis autem ducimus reprehenderit
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Card3}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                React Developer
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Nageshwar khedkar
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem tempore magni quis autem ducimus reprehenderit
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Card1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                React Developer
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Nageshwar Khedkar
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem tempore magni quis autem ducimus reprehenderit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
