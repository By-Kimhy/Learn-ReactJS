import Greeting from "./components/Greeting.jsx";
import Job from "./components/Job.jsx";
import Message from "./components/Message.jsx";
import './App.css';

function App() {
  return (
    <div className="container">
      <Greeting />
      <Job />
      <Message />
    </div>
  );
}

export default App;

// // import React from 'react';

// // const App = () => {

// //   // return React.createElement('h1',
// //   //   null,
// //   //   React.createElement('span',null,'hi'),
// //   //   'Hello, React!');

// //   return (
// //     <h1>
// //       <span>hi</span>
// //       Hello, React!
// //     </h1>
// //   );
// // };

// import React from 'react';

// // const App = () => {
// //   return (
// //     // <>
// //     //   <h1>Hello, React!</h1>
// //     //   <p>My name is Kimhy</p>
// //     // </>
// //     <React.Fragment>
// //       <h1>Hello, React!</h1>
// //       <p>My name is Kimhy</p>
// //     </React.Fragment>
// //   );
// // };

// const App = () => {
//   return (
//   <div>
//     <Greeting /> <Job /> <Message />
//   </div>
//   );
// };

// function Greeting() {
//   return <h2>Hello, React!</h2>;
// }

// function Job(){
//   return <h3>My name is Kimhy</h3>;
// }
// function Message(){
//   return <p>Hello, React!</p>;
// }

// export default App;
