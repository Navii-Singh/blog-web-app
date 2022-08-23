import "./App.css";
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { AuthContext } from "./Context/authContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
          {user ? <Redirect to='/'/> : <Login />}
          </Route>
          <Route path="/register">
          {user ?  <Redirect to='/'/> : <Register />}
          </Route>
          <Route path="/write">
          {user ? <Write /> :<Redirect to='register'/>}
          </Route>
          <Route path="/settings">
          {user ? <Settings /> : <Redirect to='register'/>}
          </Route>
          <Route path="/single/:id">
          <Single /> 
          </Route>
          <Route path="/about">
          <About /> 
          </Route>
          <Route path="/contact">
          <Contact /> 
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
