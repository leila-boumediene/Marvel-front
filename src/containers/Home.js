import imagelog from "../img-login.jpg";
import imagesign from "../img-signup.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="inscription">
      <div className="log">
        <Link to={`/login`}>
          <img className="img-login" src={imagelog} alt="" />
          <p className="text">LOGIN</p>
        </Link>
      </div>

      <div className="sign">
        <Link to={`/signup`}>
          <img className="img-Signup" src={imagesign} alt="" />
          <p className="text">SIGNUP</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
