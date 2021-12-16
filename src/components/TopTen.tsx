import IBreed from "../utils/IBreed";
import changeName from "../utils/changeName";

interface TopTenProps {
  breedList: IBreed[];
}

export default function TopTen(props: TopTenProps): JSX.Element {
  const topTen = props.breedList.slice(0, 10);

  return (
    <div className="container" text-align="left">
      <div className="p-3">
        <h3>Top 10 breeds</h3>
      </div>
      <div className="table">
        <div className="thead">
          <div className="trow">
            <th scope="col">Rank</th>
            <th scope="col">Breed</th>
            <th scope="col">Votes</th>
          </div>
        </div>
        <div className="tbody">
          {topTen.map((e, index) => (
            <div key={e.id} className="trow">
              <td>{index + 1}</td>
              <td>{changeName(e.breed)}</td>
              <td>{e.votes}</td>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
