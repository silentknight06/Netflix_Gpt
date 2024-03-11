import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularmovies = useSelector((store)=>store.movies.addPopularMovie) 

    

    const getPopularMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json =  await data.json();
      dispatch(addPopularMovies(json.results));
    }
      
    useEffect(()=>{
       !popularmovies && getPopularMovies();
    },[])
    
}
export default usePopularMovies