import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className=" w-32 md:w-48 pr-4  hover:scale-110 hover:transition duration-300 ease-in-out">
      <img alt="" 
       src={IMG_CDN_URL + posterPath }

      />
    </div>
  );
};

export default MovieCard;
