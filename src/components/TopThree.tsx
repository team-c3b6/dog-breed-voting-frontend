import IBreed from "../utils/IBreed";
import "./TopThree.css";
import changeName from "../utils/changeName";

interface TopThreeProps {
  breedList: IBreed[];
}

export default function TopThree(props: TopThreeProps): JSX.Element {
  const topThree = props.breedList.slice(0, 3);

  return (
    <div className="container" text-align="center">
      <div className="p-3">
          <h3 text-align="center">🏆🐾The Pawdium🐾🏆</h3>
      </div>
      <div className="row">
        {topThree.map((e, index) => (
          <div key={e.id} className="col-3">
            <img src={e.image_url} alt={e.breed} className="image"></img>
            <p>
              #{index + 1} {changeName(e.breed)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
