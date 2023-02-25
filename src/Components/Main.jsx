import GenreRow from "./GenreRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRockAction,
  getPopAction,
  getHipHopAction,
  fetchAlbumAction,
} from "../redux/actions";

const Main = () => {
  // Use state

  // const [artist1, setArtist1] = useState();
  //   const [artist2, setArtist2] = useState();
  //   const [artist3, setArtist3] = useState();
  //   const [artist4, setArtist4] = useState();

  // UseSelector
  const dispatch = useDispatch();
  const rockStateSlice = useSelector((state) => state.rock.rockAlbums);
  const popStateSlice = useSelector((state) => state.pop.popAlbums);
  const hipHopStateSlice = useSelector((state) => state.hipHop.hipHopAlbums);

  // Array di generi

  const genreArray = ["Rock Classic", "Pop Culture", "Hip Hop"];

  // Array di artisti

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

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  // Randomizer di artisti

  const artistRandomizer = (artistArray) => {
    let randomArtists = [];
    while (randomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = artistArray[Math.floor(Math.random() * artistArray.length)]; // select an element from the array with an index between 0 and 7
      if (!randomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        randomArtists.push(artist); // pushes the artist in the array
      }
    }
    return randomArtists;
  };

  // Salvo gli array di artisti random

  const rockRandomizer = artistRandomizer(rockArtists);
  const popRandomizer = artistRandomizer(popArtists);
  const hipHopRandomizer = artistRandomizer(hipHopArtists);

  // ARRAY delle porzioni di stato

  const sliceArray = [rockStateSlice, popStateSlice, hipHopStateSlice];

  // Eseguo fetch dinamici

  useEffect(() => {
    dispatch(fetchAlbumAction(rockRandomizer[0], getRockAction)); // MA.... NON MANCA IL DISPATCH?? (cit.)
    dispatch(fetchAlbumAction(popRandomizer[0], getPopAction));
    dispatch(fetchAlbumAction(hipHopRandomizer[0], getHipHopAction));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render del componente

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
      {genreArray.map((genre, index) => (
        <>
          <GenreRow genre={genre} rockStateSlice={sliceArray[index]} />
        </>
      ))}
    </>
  );
};

export default Main;
