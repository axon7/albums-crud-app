import React, { useState } from "react";
import { connect } from "react-redux";
import AlbumsTableItem from "../components/AlbumsTableItem";
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
          return <AlbumsTableItem key={id} id={id} userId={userId} title={title} />;
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  albums: state.data
});

export default connect(mapStateToProps, null)(AlbumsTable);
