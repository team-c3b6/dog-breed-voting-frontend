import { useEffect, useState } from "react";
import { retrieveBreedName } from "../utils/retrieveBreedName";
import changeName from "../utils/changeName";
import axios from "axios";
import { APIbase } from "../utils/APIbase";
import { useSound } from "use-sound"
import bark from "../sounds/bark.wav"
import "./Voting.css"

export default function Voting(): JSX.Element {
  const [options, setOptions] = useState<string[]>([]);

  const [play] = useSound(bark);

  const handleLoadOptions = () => {
    fetch("https://dog.ceo/api/breeds/image/random/2")
      .then((response) => response.json())
      .then((jsonBody) => {
        const fetchedData = jsonBody;
        setOptions(fetchedData.message);
        // console.log(fetchedData);
      });
  };

  useEffect(handleLoadOptions, []);

  const handleVote = async (num: number) => {
    play()
    await axios
      .post(APIbase + "/breeds", {
        breed: retrieveBreedName(options[num]),
        image_url: options[num],
      })
      .then(() => handleLoadOptions());
  };

  return (
    <>
      <div className="container" text-align="center">
        <div className="row">
          <div className="col-6">
            <img
              className="votingImg"
              src={options[0]}
              alt={retrieveBreedName(options[0])}
              onClick={() => handleVote(0)}
              height="500"
            />
            <p>{changeName(retrieveBreedName(options[0]))}</p>
          </div>
          <div className="col-6">
            <img
              className="votingImg"
              src={options[1]}
              alt={retrieveBreedName(options[1])}
              onClick={() => handleVote(1)}
              height="500"
            />
            <p>{changeName(retrieveBreedName(options[1]))}</p>
          </div>
        </div>
      </div>
    </>
  );
}
