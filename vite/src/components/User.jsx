import React from 'react'

const names = ['Kimhy', 'Alice', 'Bob']

const User = () => {
  return (
    <div>
      {names.map((n) => <h3>{n}</h3>)}
    </div>
  )
}

export default User