const initialState = {
  rockAlbums: null,
};

export const rockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROCK_ALBUMS":
      return {
        ...state,
        rockAlbums: action.payload,
      };
    default:
      return state;
  }
};
