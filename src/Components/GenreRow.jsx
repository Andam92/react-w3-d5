import { Row } from "react-bootstrap";
import SingleAlbum from "./SingleAlbum";

const GenreRow = ({ genre, rockStateSlice }) => {
  const counter = [1, 2, 3, 4];
  return (
    <>
      <Row className="text-light mt-5">
        <h2>{genre}</h2>
      </Row>
      {
        <Row className="text-light mt-3">
          {counter.map((element, index) => (
            <SingleAlbum rockStateSlice={rockStateSlice} index={index} />
          ))}
        </Row>
      }
    </>
  );
};

export default GenreRow;
