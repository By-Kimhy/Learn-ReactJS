import React from 'react'

const myStyle = {
  width: '500px',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '10px'
}

const Image = () => {
  return (
    <img style={myStyle} src='https://images.pexels.com/photos/28267590/pexels-photo-28267590.jpeg' alt='MyPicture' />
  )
}

export default Image