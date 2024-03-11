import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className=" w-32 md:w-48 pr-4">
      <img alt="" 
       src={IMG_CDN_URL + posterPath }

      />
    </div>
  );
};

export default MovieCard;
