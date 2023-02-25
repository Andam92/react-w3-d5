const initialState = {
  hipHopAlbum: null,
};

export const hipHopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HIP_HOP_ALBUMS":
      return {
        ...state,
        hipHopAlbums: action.payload,
      };
    default:
      return state;
  }
};
