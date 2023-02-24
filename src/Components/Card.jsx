import { Col, Card } from "react-bootstrap";

const SingleAlbum = ({ fetchedAlbums }) => {
  return (
    <Col xs={3}>
      <Card>
        <Card.Img
          variant="top"
          src={fetchedAlbums && fetchedAlbums.data[0].album.cover_big}
        />
      </Card>
      <p className="text-light text-center">
        {fetchedAlbums && fetchedAlbums.data[0].title}
      </p>
      <p className="text-light text-center">
        {fetchedAlbums && fetchedAlbums.data[0].artist.name}
      </p>
    </Col>
  );
};

export default SingleAlbum;
