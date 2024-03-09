import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptmovieSuggestions from './GptmovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    
    <div className="absolute -z-10">
       <img
          src={BG_URL}
          alt=""
        />
      </div>

        <GptSearchbar/>
        <GptmovieSuggestions/>
    </div>
  )
}

export default GptSearch