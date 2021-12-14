import IBreed from "../utils/IBreed";
// import TopTen from "./TopTen";
import { useEffect } from "react";
import axios from "axios";

interface LeaderboardProps {
    breedList: IBreed[];
    setBreedList: (breedList: IBreed[]) => void
}

export default function Leaderboard(props: LeaderboardProps): JSX.Element {
    async function fetchBreeds() {
        await axios.get("https://dog-breed-voting-c3b6.herokuapp.com/breeds")
        .then((response) => {
            console.log(response);
            props.setBreedList(response.data.data.breedsList)
          })
    }
    useEffect(() => {fetchBreeds();}, []);

    console.log(props.breedList)
  
    return <></>;
}
