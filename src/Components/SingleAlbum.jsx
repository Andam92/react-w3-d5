import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleAlbum = ({ rockStateSlice, index }) => {
  console.log("stefano ha vinto tutto", rockStateSlice);
  const navigate = useNavigate();

  return (
    <Col xs={3}>
      <Card onClick={() => navigate(rockStateSlice.data[index].album?.id)}>
        <Card.Img
          variant="top"
          src={rockStateSlice && rockStateSlice.data[index].album?.cover_big}
        />
      </Card>
      <p className="text-light text-center">
        {rockStateSlice && rockStateSlice.data[index]?.title}
      </p>
      <p className="text-light text-center">
        {rockStateSlice && rockStateSlice.data[index]?.artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
