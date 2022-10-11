import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

function Home() {
  return (
    <div>
      <Header msgButton="/" />
      <TinderCards />

      <SwipeButtons />
    </div>
  );
}

export default Home;
