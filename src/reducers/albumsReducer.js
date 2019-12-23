import { FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE, DELETE_ALBUM, ADD_NEW_ALBUM, UPDATE_ALBUM } from "../actions/actions";

const initialState = {
  data: [],
  loading: true,
  error: ""
};

const albumsReducer = (state = initialState, action) => {
  const albumsAfterDelete = state.data.filter(item => item.id !== action.payload);

  const updateData = (arr, toUpdate) => {
    let newArr = [...arr];
    newArr.map((item, index) => {
      if (item.id === toUpdate.id) {
        newArr[index] = toUpdate;
      }
    });
    return newArr;
  };

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
    case ADD_NEW_ALBUM:
      let lastItemId = state.data[state.data.length - 1].id;
      return {
        ...state,
        data: [...state.data, { title: action.payload, id: lastItemId + 1, userId: 11 }]
      };
    case UPDATE_ALBUM:
      return {
        ...state,
        data: updateData(state.data, action.payload)
      };

    default:
      return state;
  }
};

export default albumsReducer;
