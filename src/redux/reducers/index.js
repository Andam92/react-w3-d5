const initialState = {
  albums: [],
  loading: true,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALBUMS":
      return {
        ...state,
        albums: [action.payload],
      };
    case "LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
