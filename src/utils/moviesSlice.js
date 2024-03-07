import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies : null,
        addTrailerVideo:null,
        addPopularMovies:null,
        addUpComingMovie:null,
        addTopRatedMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.addPopularMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.addTrailerVideo = action.payload;
        },
        addUpComingMovie:(state, action)=>{
            state.addUpComingMovie = action.payload;
        },
        addTopRatedMovie:(state, action) =>{
            state.addTopRatedMovie= action.payload;
        },
    },
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpComingMovie,addTopRatedMovie}= moviesSlice.actions;
export default moviesSlice.reducer;