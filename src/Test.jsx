import React from 'react'
import image from './assets/images/wallpaper.jpg'
export const Test = () => {
  return (
    <div>
      <img src="./assets/images/wallpaper.jpg" alt="alt"  />
      <img src={image} alt="const alt" />
    </div>
  )
}