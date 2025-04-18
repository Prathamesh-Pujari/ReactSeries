import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div style={{ backgroundColor: color, width: "100vw", height: "100vw" }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white   rounded-full px-3 py-3 text-black">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 rounded-full"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-700 rounded-full"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-700 rounded-full"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
