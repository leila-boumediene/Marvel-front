import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Cards = () => {
  // je récupère l'ID déclaré en params du côté back
  const { character } = useParams();
  console.log(character);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/characters`);

        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
        // const characters = data._id;
      } catch (error) {
        console.log({ message: error });
      }
    };
    fetchData();
  }, [character]);
  return isLoading ? (
    <p>en cours de chargement...</p>
  ) : (
    <>
      {/* <div>
        {data.results.map((characters, index) => {
          return (
            <>
              <Link to={`/cards`}>
                <img
                  src={
                    characters.thumbnail.path +
                    "." +
                    characters.thumbnail.extension
                  }
                  alt=""
                />
              </Link>
            </>
          );
        })}
      </div> */}
      <div>
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt={data.name}
        />
        {data.comics.map((comics, index) => {
          return (
            <div key={comics.title}>
              {comics.title}
              {comics.description}
              <img
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div></div>
    </>
  );
};
export default Cards;
