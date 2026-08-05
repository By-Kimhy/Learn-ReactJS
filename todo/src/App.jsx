import {Routes, Route,Link} from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  ) 
}
function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  ) 
}
function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  ) 
}

const App = () => {
  return (
    <div>
      <nav>
        <Link>Home</Link>
        <Link>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App