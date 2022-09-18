import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const url = "https://api.igdb.com/v4/games";

function GamesList() {
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
    return (
      <div className="loader">
        <div className="circles">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
        <div className="pacman">
          <span className="top"></span>
          <span className="bottom"></span>
          <span className="left"></span>
          <div className="eye"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="container-games-list">
      {games.map(function (game) {
        return (
          <a key={game.id} id={game.id} href={`game/${game.id}`} className="games">
            <img src={game.screenshots[0].url} alt="logo" className="games-img" />
            <div className="games-title">
              <div className="games-title-name">{game.name}</div>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="games-icon"
                onClick={() => {
                  localStorage.setItem("addcartID", JSON.stringify(game.id));
                }}
              />
            </div>

            <button className="games-button">View more</button>
          </a>
        );
      })}
    </div>
  );
}

export default GamesList;
