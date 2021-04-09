import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(`http://localhost:3001/user/login`, {
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
      setUser(response.data);
    } catch (error) {
      console.log(error.message);
      //   setErrorMessage("indetification's wrong!!");
    }
  };
  return (
    <div className="Bodyform">
      <div className="Formulaire">
        <form className="connecter" onSubmit={handleSubmit}>
          <h4>I CONNECT</h4>
          <input
            className="email"
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            className="mdp"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="connexion" type="submit">
            {" Login 🦸🏻‍♂️ "}
          </button>
          <Link to="/signup">
            <p className="Notyet">No account yet ? register</p>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
