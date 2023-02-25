import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleAlbum = ({ rockStateSlice, index }) => {
  console.log("stefano ha vinto tutto", rockStateSlice);

  return (
    <Col xs={3}>
      <Card>
        <Card.Img
          variant="top"
          src={rockStateSlice && rockStateSlice.data[index].album?.cover_big}
        />
      </Card>
      <Link to={"/details/" + rockStateSlice?.data[index].album.id}>
        <p className="text-light text-center">
          {rockStateSlice && rockStateSlice.data[index]?.title}
        </p>
      </Link>
      <p className="text-light text-center">
        {rockStateSlice && rockStateSlice.data[index]?.artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
