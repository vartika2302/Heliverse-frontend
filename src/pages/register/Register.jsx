import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register-container">
      {error && <p className="error">Something went wrong!</p>}
      <div className="register-wrapper">
        <div className="register-heading">Register</div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-item">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter password again"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">REGISTER</button>
          <p className="login-para">
            Already have an account? <Link to="/login" style={{textDecoration:"none", color:"green"}}>Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
