import {useEffect} from 'react'

const App = () => {
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