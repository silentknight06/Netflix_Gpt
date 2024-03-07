import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();
    const getTopRatedmovies = useSelector((store)=>store.movies.addTopRatedMovie) ;

    const getTopRatedMovie = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json =  await data.json();
      dispatch(addTopRatedMovie(json.results));
    }
      
    useEffect(()=>{
       !getTopRatedmovies && getTopRatedMovie();
    },[])
    
}
export default useTopRatedMovie