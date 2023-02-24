import { Col, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleAlbum from "./Card";

const Main = () => {
  const [artist1, setArtist1] = useState();
  const [artist2, setArtist2] = useState();
  const [artist3, setArtist3] = useState();
  const [artist4, setArtist4] = useState();

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
  const fetchAlbum = async (artist, setArtist) => {
    try {
      let response = await fetch(
        " https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (response.ok) {
        let result = await response.json();
        setArtist(result);
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
    fetchAlbum(rockRandomArtists[0], setArtist1);
    fetchAlbum(rockRandomArtists[1], setArtist2);
    fetchAlbum(rockRandomArtists[2], setArtist3);
    fetchAlbum(rockRandomArtists[3], setArtist4);
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
          {/* <Col xs={3}>
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
          </Col> */}
          <SingleAlbum fetchedAlbums={artist1} />
          <SingleAlbum fetchedAlbums={artist2} />
          <SingleAlbum fetchedAlbums={artist3} />
          <SingleAlbum fetchedAlbums={artist4} />
        </Row>
      }
    </>
  );
};

export default Main;
