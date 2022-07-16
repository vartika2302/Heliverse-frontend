import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      res.data && dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-heading">Login</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" disabled={isFetching}>LOGIN</button>
          <p className="register-para">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "green" }}
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
