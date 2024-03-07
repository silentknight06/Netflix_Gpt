import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addUpComingMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovie = () =>{
    const dispatch = useDispatch();
    const upcomingmovies = useSelector((store)=>store.movies.addUpComingMovie) ;

    const getUpcomingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json =  await data.json();
      dispatch(addUpComingMovie(json.results));
    }
      
    useEffect(()=>{
       !upcomingmovies && getUpcomingMovies();
    },[])
    
}
export default useUpComingMovie