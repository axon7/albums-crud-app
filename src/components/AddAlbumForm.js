import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewAlbum } from "../actions/actions";

const AddAlbumForm = ({ addNewAlbum }) => {
  const [albumTitle, setAlbumTitle] = useState({
    albumTitle: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    addNewAlbum(albumTitle);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input placeholder='Title' onChange={e => setAlbumTitle(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default connect(null, { addNewAlbum })(AddAlbumForm);
