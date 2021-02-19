import Logo from "../Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <img className="Logo" src={Logo} alt="" />
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
              <button className="Favoris">FAVORTIES</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
