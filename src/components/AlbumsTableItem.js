import React, { useState } from "react";
import { connect } from "react-redux";

import { deleteAlbum, updateAlbum } from "../actions/actions";

const AlbumsTableItem = (props, { deleteAlbum, updateAlbum }) => {
  const [editMode, toggleEditMode] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState(props.title);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newAlbumTitle);
    props.updateAlbum(newAlbumTitle, props.id, props.userId);
    toggleEditMode(!editMode);
  };

  return editMode ? (
    <tr key={`${props.id}${props.userId}`}>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>
        <form onSubmit={e => handleSubmit(e)}>
          <input value={newAlbumTitle} onChange={e => setNewAlbumTitle(e.target.value)} />
        </form>
      </td>
      <td>
        <button type='submit' onClick={e => handleSubmit(e)}>
          {!editMode ? "Edit" : "Save"}
        </button>
        <button type='button' onClick={() => toggleEditMode(!editMode)}>
          Cancel
        </button>
      </td>
    </tr>
  ) : (
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>
        <button onClick={() => toggleEditMode(!editMode)}>{!editMode ? "Edit" : "Save"}</button>
        <button type='button' onClick={() => props.deleteAlbum(props.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect(null, { deleteAlbum, updateAlbum })(AlbumsTableItem);
