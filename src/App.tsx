import Header from "./components/Header";
import Voting from "./components/Voting";
import Leaderboard from "./components/Leaderboard";
import { useState } from "react";
import IBreed from "./utils/IBreed";

function App(): JSX.Element {
  const [breedList, setBreedList] = useState<IBreed[]>([]);

  return (
    <>
      <Header />
      <Voting />
      <Leaderboard breedList={breedList} setBreedList={setBreedList} />
    </>
  );
}

export default App;
