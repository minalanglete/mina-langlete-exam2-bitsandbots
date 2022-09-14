import Heading from "../layout/Heading";
import GamesList from "../layout/GamesList";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="container-games content-wrap">
      <Heading title="This is the home of the games" />
      <p className="games-genre">Genre:</p>
      <div className="container-games-list">
        <GamesList />

        <Footer />
      </div>
    </div>
  );
}
