import { useContext, useEffect, useState } from "react";
import "./setting.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Setting() {
  const { user } = useContext(Context);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [error, setError] = useState(false);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.put("http://localhost:5000/user/" + user._id);
      setName(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      res.data && window.location.replace("/account");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="setting-container">
      {error && <p className="error">Something went wrong!</p>}
      <div className="setting-wrapper">
        <h3 className="setting-heading">Settings</h3>
        <form className="profile-setting" onSubmit={handleSubmit}>
          <div className="setting-item">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="setting-item">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">UPDATE</button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
