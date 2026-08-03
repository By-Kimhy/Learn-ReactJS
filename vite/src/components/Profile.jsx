import React from 'react'
import Author from './Author'
import Image from './Image'
import Message from './Message'

const Profile = () => {
  return (<article>
    <Author />
    <Message />
    <Image />
  </article>);
}

export default Profile