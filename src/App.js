import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import MyAccount from "./pages/myAccount/MyAccount";
import Setting from "./pages/setting/Setting";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/account"
            element={user && <MyAccount />}
          />
          <Route exact path="/setting/:id" element={user && <Setting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
