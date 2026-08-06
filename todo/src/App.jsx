import { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthContext from "./assets/AuthContext";
import "./App_route.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div>
        {user.isAuth ? (
          <button className="logout" onClick={logout}>
            LogOut
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}

function HomePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Home Page</h1>
      {user.isAuth ? (
        <p>
          Welcome back : <span style={{ color: "red" }}>{user.name}</span>!
        </p>
      ) : (
        <p>You are not logged in. Go to the login page to sign in.</p>
      )}
    </div>
  );
}
function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name:[{user.name ? user.name : "Here is no user name"}]</p>
      <p>Here you could show more user info from the context</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, login, logout } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label> Username: </label>
        <input
          type="text"
          placeholder="Type your UserName...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {user.isAuth ? (
          <button  onClick={logout}>
            LogOut
          </button>
        ) : (
          <button onClick={handleSubmit}>Login</button>
        )}
      </form>
      {user.isAuth && (
        <p>
          Welcome User : <span style={{ color: "red" }}>{user.name}</span> Login
          Successful
        </p>
      )}
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
}

const App = () => {
  const [user, setUser] = useState({ name: "", isAuth: false });
  function login(name) {
    setUser({ name: name, isAuth: true });
  }
  function logout() {
    setUser({ name: "", isAuth: false });
  }
  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
