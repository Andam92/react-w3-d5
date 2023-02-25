import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumDetails = (props) => {
  const [fetchResult, setFetchResult] = useState();

  const params = useParams();
  console.log(params);

  const fetchDetails = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id
      );
      if (response.ok) {
        let data = await response.json();
        setFetchResult(data);
        console.log("Stefano docet", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

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
              src={fetchResult?.cover_big}
              className="card-img img-fluid"
              alt="Album"
            />
            <div className="mt-4 text-center">
              <p className="album-title">{fetchResult?.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">{fetchResult?.artist.name}</p>
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
                {fetchResult &&
                  fetchResult?.tracks?.data?.map((element, index) => (
                    <div className="py-3 trackHover" key={"track" + index}>
                      <a
                        href="#/"
                        className="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {element.title}
                      </a>
                      <small className="duration" style={{ color: "white" }}>
                        {element.duration}
                      </small>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
