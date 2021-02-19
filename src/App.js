import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <Route>
        <Header />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/comics">
        <Comics />
      </Route>
      <Route path="/cards">
        <Cards />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
