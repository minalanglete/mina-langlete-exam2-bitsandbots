import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const url = "https://noroffcors.herokuapp.com/https://api.igdb.com/v4/games";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            "Client-ID": "zbjrsqbdwq9f0c2kgsc8fqynng1hwa",
            Authorization: "Bearer 82bnqgof1fmue5aeq7k61i6l7mg5gm",
          },
          method: "POST",
          body: "fields name, genres, screenshots.*; where id = (1,2,3,4,5,6,7,8,9,10,11,12); limit 20;",
        });

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGames(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="pac-man-loading"></div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="container-game">
      {games.map(function (game) {
        return (
          <a key={game.id} href={`game/${game.id}`} className="game">
            {game.name}
            <FontAwesomeIcon icon={faTrashCan} className="icon-trashcan" />
          </a>
        );
      })}
    </div>
  );
}

export default Games;
