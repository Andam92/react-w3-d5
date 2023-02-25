const GET_ROCK_ALBUMS = "GET_ROCK_ALBUMS";
const GET_POP_ALBUMS = "GET_POP_ALBUMS";
const GET_HIP_HOP_ALBUMS = "GET_HIP_HOP_ALBUMS";

export const getRockAction = (albums) => {
  return {
    type: GET_ROCK_ALBUMS,
    payload: albums,
  };
};
export const getPopAction = (albums) => {
  return {
    type: GET_POP_ALBUMS,
    payload: albums,
  };
};
export const getHipHopAction = (albums) => {
  return {
    type: GET_HIP_HOP_ALBUMS,
    payload: albums,
  };
};

export const fetchAlbumAction = (artist, dispatchType) => {
  return async (dispatch, getState) => {
    try {
      console.log("strewdfano");
      let response = await fetch(
        " https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (response.ok) {
        let result = await response.json();
        dispatch(dispatchType(result));
        console.log(result);
        //dispatch(getRockAction(result));
      }
    } catch (error) {
      console.log("⚠️ CATCH ERROR!", error);
    }
  };
};

// export const fetchAlbumAction = () => {
//   return async (dispatch, getState) => {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
//     );
//     if (response.ok) {
//       const array = await response.json();
//       dispatch({
//         type: "ROCK",
//       });
//       dispatch({
//         type: "LOADING",
//       });
//     }
//   };
// };
