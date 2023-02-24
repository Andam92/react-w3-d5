import { Col, Row, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];
  const dispatch = useDispatch();
  const fetchedAlbums = useSelector((state) => state.albums);
  console.log(fetchedAlbums);
  const fetchAlbum = async () => {
    try {
      let response = await fetch(
        " https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (response.ok) {
        let result = await response.json();

        dispatch({
          type: "GET_ALBUMS",
          payload: result,
        });
      }
    } catch (error) {
      console.log("⚠️ CATCH ERROR!", error);
    }
  };

  useEffect(() => {
    dispatch({
      type: "LOADING",
    });
    fetchAlbum();
    // Randomizer di artisti Rock
    let rockRandomArtists = [];
    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }
    console.log(rockRandomArtists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex text-center">
          <a href="#s">TRENDING</a>
          <a href="#s">PODCAST</a>
          <a href="#s">MOODS AND GENRES</a>
          <a href="#s">NEW RELEASES</a>
          <a href="#s">DISCOVER</a>
        </div>
      </div>
      <Row className="text-light mt-5">
        <h2>Rock Classics</h2>
      </Row>
      {
        <Row className="text-light mt-3">
          <Col xs={3}>
            <Card>
              <Card.Img
                variant="top"
                src={fetchedAlbums && fetchedAlbums.data[0].album.cover_big}
              />
            </Card>
            <p className="text-light text-center">{"albums.title"}</p>
            <p className="text-light text-center">{"albums.artist.name"}</p>
          </Col>
        </Row>
      }
    </>
  );
};

export default Main;
