import { useContext } from "react";
import { Context } from "../../context/Context";
import "./myAccount.css";

function MyAccount() {

    const {user} = useContext(Context);

  return (
    <div className="account-container">
      <div className="account-wrapper">
        <h2 className="account-heading">My Profile</h2>
        <div className="account-info">
          <div className="account-item">
            <h4
            >Name</h4>
            <p>{user.name}</p>
          </div>
          <div className="account-item">
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
