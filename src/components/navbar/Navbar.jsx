import "./navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, dispatch } = useContext(Context);

  

  return (
    <div className="navbar">
      <span>Heliverse</span>
      <div className="nav-items">
        <Link to="/login" className="link">
          <span>{!user && "Login"}</span>
        </Link>
        <Link to="/account" className="link">
          <span>{user && "Account"}</span>
        </Link>
        <Link to={`/setting/${user?._id}`} className="link">
          <span>{user && "Settings"}</span>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;
