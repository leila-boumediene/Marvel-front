import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            `https://lereacteur-marvel-api.herokuapp.com/signup`,
            {
              username: username,
              email: email,
              phone: phone,
              password: password,
            }
          );
          setUser(response.data.token, null);
          history.push("/");
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setErrorMessage(
          "your super power is to forget your first entered password"
        );
      }
    } else {
      setErrorMessage("you are missing some elements");
    }
  };

  return (
    <>
      <div className="bodyform">
        <form className="formulaire" onSubmit={handleSubmit}>
          <h4>I REGISTER</h4>
          <input
            className="line1"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            className="line2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="line3"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            className="line4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="inscrire" type="submit" placeholder="Signup">
            {" Signup 🦸🏻‍♂️ "}
          </button>
          <Link to={`/login`}>
            <p className="question">You have an account ? login !</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
