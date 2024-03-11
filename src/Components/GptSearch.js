import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptmovieSuggestions from './GptmovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    
    <div className="fixed -z-10">
       <img className="h-screen object-cover md:w-screen md:object-cover"
          src={BG_URL}
          alt=""
        />
      </div>

     <div >
        <GptSearchbar/>
        <GptmovieSuggestions/>
    </div>

    </>
  )
}

export default GptSearch