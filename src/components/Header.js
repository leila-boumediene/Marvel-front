import Logo from "../Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className="Buttons3">
            <Link to={`/favoris`}>
              <button className="Favoris">FAVORITES</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
