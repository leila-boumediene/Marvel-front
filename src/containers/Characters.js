// import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = ({ filter, setFilter }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/characters`);
        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
        const characters = data.name;
        characters.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });
      } catch (error) {
        console.log({ message: error });
      }
    };
    fetchData();
  }, [setData]);
  return isLoading ? (
    <p>en cours de chargement...</p>
  ) : (
    <>
      {/* <div className="searchBar">
        <input
          type="search"
          placeholder="Search"
          onChange={(event) => {
            setSearchResult(event.target.value);
          }}
        />
      </div> */}
      {/* <div className="search-bar">
        <input
          className="search-bar-characters"
          type="text"
          name=""
          id=""
          onChange={(event) => {
            //   console.log(event);
            setData(event.target.value);
          }}
        />
      </div> */}
      <div className="PictureCharacters">
        {/* <button onClick={(characters) => characters.sort(data.name)}>
          Trier
        </button> */}
        {data.results.map((characters, index) => {
          return (
            <>
              <div className="boxCharacters" key={characters._id}>
                <Link to={`/cards`}>
                  <img
                    className="PictureCharact"
                    src={
                      characters.thumbnail.path +
                      "." +
                      characters.thumbnail.extension
                    }
                    alt={characters.name}
                  />
                </Link>
                <p className="Name"> {characters.name}</p>
                <p className="descip"> {characters.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Characters;

{
  /* // ?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit} */
}
