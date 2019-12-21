import axios from "axios";

export const FETCH_ALBUMS_PENDING = "FETCH_ALBUMS_PENDING";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";
export const DELETE_ALBUM = "DELETE_ALBUM";

const URL = "https://jsonplaceholder.typicode.com/albums";

export const fetchAlbumsPending = () => ({
  type: FETCH_ALBUMS_PENDING
});

export const fetchAlbumsFailure = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: { error }
});

export const fetchAlbumsSuccess = data => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: data
});

export const fetchAlbums = () => async dispatch => {
  try {
    await dispatch(fetchAlbumsPending());
    const res = await axios.get(URL);
    await dispatch(fetchAlbumsSuccess(res.data));
  } catch (error) {
    await dispatch(fetchAlbumsFailure(error));
  }
};

export const deleteAlbum = id => async dispatch => {
  try {
    await axios.delete(`${URL}/${id}`);
    await dispatch({
      type: DELETE_ALBUM,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};
