import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewAlbum } from "../actions/actions";

const AddAlbumForm = ({ addNewAlbum, data }) => {
  const [albumTitle, setAlbumTitle] = useState("");

  const clearInput = () => {
    setAlbumTitle("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewAlbum(albumTitle);
    clearInput();
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input placeholder='Title' value={albumTitle} onChange={e => setAlbumTitle(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
};

const mapStateToProps = state => ({
  data: state.data
});
export default connect(mapStateToProps, { addNewAlbum })(AddAlbumForm);
