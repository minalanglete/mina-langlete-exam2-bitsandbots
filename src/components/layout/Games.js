import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const url = "https://noroffcors.herokuapp.com/api.igdb.com/v4/games";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Client-ID": "zbjrsqbdwq9f0c2kgsc8fqynng1hwa",
          Authorization: "Bearer 82bnqgof1fmue5aeq7k61i6l7mg5gm",
        },
        body: "fields name",
      };

      try {
        const response = await fetch(url, options);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="container-game">
      {games.map(function (game) {
        return (
          <a key={game.id} href={`game/${game.id}`} className="game">
            {game.id}
            {game.name}
            <FontAwesomeIcon icon={faTrashCan} className="icon-trashcan" />
          </a>
        );
      })}
    </div>
  );
}

export default Games;
