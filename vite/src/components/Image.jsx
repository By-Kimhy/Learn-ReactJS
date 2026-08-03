import React from 'react'

import myPic from '../assets/img/1-1.webp'

const myStyle = {
  width: '500px',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '10px'
}

const Image = () => {
  return (
    <img style={myStyle} src={myPic} alt='MyPicture' />
  )
}

export default Image