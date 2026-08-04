import React from 'react'
import './App.css'
const obj = {
  name: 'Kimhy',
  age: 27,
  job: 'Frontend Developer',
}
const newObj = {...obj, job: 'Backend Developer'}

const App = () => {
  const [user, setUser] = React.useState(obj);
  // function handleChange(){
  //   setUser(newObj);
  // }
  return (
    <article>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.job}</h2>
      {/* <button onClick={handleChange}>Change</button> */}
      <button onClick={() => setUser(newObj)}>Change</button>
    </article>
  )
}

export default App