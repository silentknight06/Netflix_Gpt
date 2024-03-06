import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg w-1/4"> {overview} </p>
      <div>
        <button className=" text-black p-4 px-12 text-xl  bg-white rounded-lg hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className=" mx-2 text-white p-4 px-12 text-xl  bg-gray-500 bg-opacity-80 rounded-lg">
         
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
