import Logo from "../Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Header = ({ search, setSearch }) => {
  const [data, setData] = useState("");
  const handleSubmit = async (elem) => {
    elem.preventDefault();
    const response = await axios.get(`http://localhost:3001`);
    console.log(response.data);
    setData(response.data);
  };
  return (
    <>
      <div className="Header">
        <Link to={`/`}>
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <div className="Menu">
          <div className="Buttons1">
            <Link to={`/characters`}>
              <button className="Personnage">CHARACTERS</button>
            </Link>
          </div>

          <div className="Buttons2">
            <Link to={`/comics`}>
              <button className="ComicsBD">COMICS</button>
            </Link>
          </div>
          {/* <div className="Buttons3">
            <Link to={`/favoris`}>
              <button className="Favoris">FAVORITES</button>
            </Link>
          </div> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
        </form>
      </div>
    </>
  );
};

export default Header;
