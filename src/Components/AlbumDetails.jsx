import { useParams } from "react-router-dom";

const AlbumDetails = (props) => {
  const params = useParams();

  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#4">TRENDING</a>
            <a href="#4">PODCAST</a>
            <a href="#4">MOODS AND GENRES</a>
            <a href="#4">NEW RELEASES</a>
            <a href="#4">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img
              src="https://via.placeholder.com/150"
              className="card-img img-fluid"
              alt="Album"
            />
            <div className="mt-4 text-center">
              <p className="album-title">$ALBUM TITLE</p>
            </div>
            <div className="text-center">
              <p className="artist-name">$AUTHOR</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                <div className="py-3 trackHover">
                  <a
                    href="#/"
                    className="card-title trackHover px-3"
                    style={{ color: "white" }}
                  >
                    $Titolo
                  </a>
                  <small className="duration" style={{ color: "white" }}>
                    durata
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
