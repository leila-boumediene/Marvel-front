import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
// import Cookies from "js-cookie";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
function App() {
  const [userToken, setUserToken] = useState();
  const setUser = (token) => {
    if (token) {
      console.log(token);
      // création d'un cookie qui a pour nom "userToken"(qui est juste un nom) et je lui dit qu'il est sauvegarder 2jours
      // Cookies.set("userToken", token, { expires: 2 });
      // mettre à jour le user token
      setUserToken(token);
    } else {
      // suppression du cookie lorsque le user se déconnecte
      // Mise à jour de userToken
      setUserToken(null);
    }
  };
  const [filter, setFilter] = useState({
    search: "",
  });
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <Characters filter={filter} setFilter={setFilter} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/comics">
          <Comics filter={filter} setFilter={setFilter} />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
