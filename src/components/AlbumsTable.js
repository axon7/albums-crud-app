import React from "react";
import { connect } from "react-redux";
import AlbumsTableItem from "./AlbumsTableItem";
const AlbumsTable = ({ albums }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
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
