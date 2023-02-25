const initialState = {
  popAlbums: null,
};

export const popReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POP_ALBUMS":
      return {
        ...state,
        popAlbums: action.payload,
      };
    default:
      return state;
  }
};
