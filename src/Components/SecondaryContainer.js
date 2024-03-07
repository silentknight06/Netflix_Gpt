import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return movies.nowPlayingMovies && (
    <div className=" bg-black">
     <div className="-mt-50 pl-12 relative z-20">
      <Movielist title= {"Now Playing"} movies= {movies.nowPlayingMovies} />
      <Movielist title= {"Popular"} movies= {movies.addPopularMovies} />
      <Movielist title= {"Upcoming"} movies= {movies.addUpComingMovie} />
     <Movielist title= {"Top Rated "} movies= {movies.addTopRatedMovie} /> 

      {/* <Movielist title= {"Trending "} movies= {movies.nowPlayingMovies} /> */}
      {/* <Movielist title= {"Popular"} movies= {movies.nowPlayingMovies} /> */}
      {/* <Movielist title= {"Upcoming"} movies= {movies.nowPlayingMovies} /> */}
     

    </div>
    </div>
  )
}

export default SecondaryContainer