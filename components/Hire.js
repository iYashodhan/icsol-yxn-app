import React from "react";

function Hire() {

  return (
      <div className={`flex gap-2 items-start justify-between py-36 px-2`}>
        <button
          onClick={(e) => setColor("")}
          className="text-white text-6xl rounded-lg p-2"
        >
          &larr;
        </button>
        <div className="flex flex-col items-start gap-16">
          <p className="text-6xl text-white font-thin">
            Help you relevant skill gaps in workforce
          </p>
          <button className="hover:bg-gray-900 px-4 p-2 bg-gray-600 outline-none text-white">
            Hire Now
          </button>
        </div>
        <button
          onClick={(e) => setColor("")}
          className="text-white text-6xl rounded-lg p-2"
        >
          &rarr;
        </button>
      </div>
  );
}

export default Hire;