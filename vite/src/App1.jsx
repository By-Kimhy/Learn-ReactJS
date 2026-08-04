import Greeting from "./components/Greeting.jsx";
import Job from "./components/Job.jsx";
import Message from "./components/Message.jsx";
import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <Greeting />
//       <Job />
//       <Message />
//     </div>
//   );
// }

// function App() {
//   // const isLoading = true;
//   // if (isLoading) {
//   //   return <Greeting />;
//   // } else {
//   //   return <Job />;
//   // }
// }

// const App = () => {
//   // const text = "hello";
//   // return <h1>{text && 'React'}</h1>;

//   const uploading = true;
//   // return <h1>{uploading ? 'The file is uploading' : 'No file is uploading'}</h1>;
//   return <h1>{uploading ? <Loading /> : 'No such file'}</h1>;
// };

// function Loading() {
//   return <span>Files are loading</span>;
// }

// export default App;

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


// import React from 'react'
// import Profile from "./components/Profile.jsx";
// import GroupPoster from "./components/GroupPoster.jsx";

// const App = () => {
//   return <GroupPoster />;
// }

// export default App

import React from 'react'
import User from "./components/User.jsx";
import Products from "./components/Products.jsx";

const App = () => {
  return <Products />;
}

export default App