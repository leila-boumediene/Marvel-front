import axios from "axios";
import { useState, useEffect } from "react";

const Comics = ({ filter, setFilter }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/comics`);
        console.log(response.data);
        // const characters = response.data.comics;
        setData(response.data);
        setIsLoading(false);
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
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search"
          onChange={(event) => {
            setSearchResult(event.target.value);
          }}
        />
      </div>
      <div className="searchbar"></div>
      <div className="PictureComics">
        {data.results.map((comics, index) => {
          return (
            <div className="boxComics">
              <img
                className="PictureComi"
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt={comics.title}
              />
              <p className="descrip">{comics.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Comics;

// ?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}
