import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovie from '../hooks/useUpComingMovie';
import useTopRatedMovie from '../hooks/useaddTopRatedMovie';

const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useUpComingMovie();
 useTopRatedMovie();
//  useTopRatedMovies();


  return (
    <div>

    <Header/>
    <MainContainer/>
    <SecondaryContainer/> 

  </div>
  )
}

export default Browse