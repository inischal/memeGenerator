import React from 'react'
import trollImage from '../assets/trollFace.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={trollImage} className='header--image' />
      <h2 className='header--title'>Meme Generator</h2>
      <p className='header--paragraph'>React Course Project - 3</p>
    </header>
  )
}

export default Header
