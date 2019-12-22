import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/actions";
const AlbumsTable = ({ albums, deleteAlbum }) => {
  return (
    <table>
      <tbody>
        <th>ID</th>
        <th>User ID</th>
        <th>Title</th>
        <th>Actions</th>
        {albums.map(item => {
          const { id, userId, title } = item;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{userId}</td>
              <td>{title}</td>
              <td>
                <button>Edit</button>
                <button type='button' onClick={() => deleteAlbum(id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  albums: state.data
});

export default connect(mapStateToProps, { deleteAlbum })(AlbumsTable);
