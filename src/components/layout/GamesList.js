import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import img from "../../logo.svg";

const url = "https://noroffcors.herokuapp.com/api.igdb.com/v4/games";

function GamesList() {
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
    <div className="container-games-list">
      {games.map(function (game) {
        return (
          <a key={game.id} href={`game/${game.id}`} className="games">
            <img src={img} alt="logo" className="games-img" />
            <div className="games-title">
              title of game
              <FontAwesomeIcon icon={faCartShopping} className="games-icon" />
              {game.id}
              {game.name}
              <button className="games-button">View more</button>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default GamesList;
