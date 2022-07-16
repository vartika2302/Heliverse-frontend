import { useContext } from "react";
import { Context } from "../../context/Context";

function Home() {
  const {user} = useContext(Context);
  console.log(user);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 70px)"
      }}
    >
      <h1>Heliverse Home Page</h1>
    </div>
  );
}

export default Home;
