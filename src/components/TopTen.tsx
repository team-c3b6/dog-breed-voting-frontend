import IBreed from "../utils/IBreed";
import changeName from "../utils/changeName";
import "./TopTen.css";

interface TopTenProps {
  breedList: IBreed[];
}

export default function TopTen(props: TopTenProps): JSX.Element {
  const topTen = props.breedList.slice(0, 10);

  return (
    <div className="container">
      <div className="p-3">
        <h3>Top 10 breeds</h3>
      </div>
      <div className="table">
        <thead>
          <tr>
            <th className="col w-15" scope="col">
              Rank
            </th>
            <th className="col w-70" scope="col">
              Breed
            </th>
            <th className="col w-15" scope="col">
              Votes
            </th>
          </tr>
        </thead>
        <tbody>
          {topTen.map((e, index) => (
            <tr key={e.id}>
              <td className="col w-15">{index + 1}</td>
              <td className="col w-70 text-left">{changeName(e.breed)}</td>
              <td className="col w-15">{e.votes}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
