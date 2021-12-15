import IBreed from "../utils/IBreed";

export default function TopTen(props: IBreed): JSX.Element {
  return (
    <>
      <table>
        <tr>
          <td>{props.breed}</td>
          <td>{props.votes}</td>
        </tr>
      </table>
    </>
  );
}
