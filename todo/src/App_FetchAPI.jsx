import {useState,useEffect} from 'react'
import "./App_FetchAPI.css"

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchUsers(){
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, [])

  return (
    <div> </div>
  )
}



export default App