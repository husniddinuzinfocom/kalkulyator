import React from 'react'
import "./Explore.css"
import ExploreHeader from '../ExploreHeader/ExploreHeader'
import Slider from "../slider/Slider"

export default function Explore() {
  return (
    <div className='Explore'>
        <ExploreHeader />
        <Slider />
    </div>
  )
}
