import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const url = "https://noroffcors.herokuapp.com/https://api.igdb.com/v4/games/";

function GameId() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  //console.log(id);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url, {
            headers: {
              "Client-ID": "zbjrsqbdwq9f0c2kgsc8fqynng1hwa",
              Authorization: "Bearer 82bnqgof1fmue5aeq7k61i6l7mg5gm",
            },
            method: "POST",
            body: "fields name, summary, screenshots.*; where id =(" + id + ");",
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
    },
    [id]
  );

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
    <div className="container-game-detail">
      {games.map(function (game) {
        return (
          <div key={game.id} id={game.id} className="game">
            <div className="game-title">
              <img src={game.screenshots[0].url} alt="logo" className="game-img" />
              <div className="game-title-name">{game.name}</div>
              <p className="game-description">Discription:</p>
              <p className="game-summary">{game.summary}</p>
              <div className="game-addtocart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="game-addtocart-icon"
                  onClick={() => {
                    localStorage.setItem("addcartID", JSON.stringify(game.id));
                  }}
                />
                <p className="game-addtocart-text">add to cart</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GameId;
