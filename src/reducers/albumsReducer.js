import { FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE, DELETE_ALBUM } from "../actions/actions";

const initialState = {
  data: [],
  loading: true,
  error: ""
};

const albumsReducer = (state = initialState, action) => {
  const albumsAfterDelete = state.data.filter(item => item.id !== action.payload);
  console.log(albumsAfterDelete);

  switch (action.type) {
    case FETCH_ALBUMS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DELETE_ALBUM:
      return {
        ...state,
        data: albumsAfterDelete
      };

    default:
      return state;
  }
};

export default albumsReducer;
