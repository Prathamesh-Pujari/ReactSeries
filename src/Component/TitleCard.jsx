import React from "react";

const TitleCard = ({ userName, InfoText }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {userName}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{InfoText}</h2>
      </div>
    </div>
  );
};

export default TitleCard;
