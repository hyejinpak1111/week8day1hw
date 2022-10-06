import Cars from './views/Car';
import ProfileView from './views/Profile';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';
import CarSingle from './views/CarSingle';
import Home from './views/Home';
import PostSingle from './views/PostSingle';

function App() {
  const { login, logout, user } = useContext(AuthContext)
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {/* <Link to="/inventory">Car Inventory</Link> */}
          <Link className="nav-link" to="/profile">Profile</Link>
          </div>
          <div className="navbar-nav ml-auto">
            {
              (user.loggedIn) ?
                <button onClick={logout} className="btn btn-primary mx-4">Logout</button>
                :
                <button onClick={login} className="btn btn-primary mx-4">Login</button>
            }
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car">
          <Route path=":id" element={<CarSingle />} />
        </Route>
        <Route path="/profile">
          <Route index element={<ProfileView />} />
          <Route path=":id" element={<PostSingle />} />
        </Route>
        <Route path="/inventory" element={<Cars />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;