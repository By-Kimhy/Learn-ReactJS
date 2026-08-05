import "./App_map.css";

function TodoList(){
  const todos = [{
    id: 1,
    text: "Learn React",
  },
  {
    id: 2,
    text: "Learn Vue",
  },
  {
    id: 3,
    text: "Learn Svelte",
  }
];
return (
  <div>
    <h2>My React Todo List</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
  );
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;