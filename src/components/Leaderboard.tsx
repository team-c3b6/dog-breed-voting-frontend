import IBreed from "../utils/IBreed";
import TopTen from "./TopTen";
import TopThree from "./TopThree";
import { useEffect } from "react";
import axios from "axios";
import { APIbase } from "../utils/APIbase";

interface LeaderboardProps {
  breedList: IBreed[];
  setBreedList: (breedList: IBreed[]) => void;
}

export default function Leaderboard(props: LeaderboardProps): JSX.Element {
  async function fetchBreeds() {
    await axios.get(APIbase + "/breeds").then((response) => {
      console.log(response);
      props.setBreedList(response.data.data.breedsList);
    });
  }
  useEffect(() => {
    fetchBreeds();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <>
    //   <div>
    //     <TopThree breedList={props.breedList} />
    //   </div>
    //   <div>
    //     <TopTen breedList={props.breedList} />
    //   </div>
    // </>
    <div className="container pb-2" text-align="center">
      <div className="row">
        <div className="col-9">
          <TopThree breedList={props.breedList} />
        </div>
        <div className="col-3">
          <TopTen breedList={props.breedList} />
          <button
            type="button"
            className="btn btn-warning"
            onClick={fetchBreeds}
          >
            refresh
          </button>
        </div>
      </div>
    </div>
  );
}
