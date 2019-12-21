import React from "react";
import { connect } from "react-redux";
import { deleteAlbum } from "../actions/actions";
const AlbumsTable = ({ albums, deleteAlbum }) => {
  return (
    <table>
      <tbody>
        <th>ID</th>s<th>User ID</th>
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

// renderTableData() {
//   return this.state.students.map((student, index) => {
//      const { id, name, age, email } = student //destructuring
//      return (
//         <tr key={id}>
//            <td>{id}</td>
//            <td>{name}</td>
//            <td>{age}</td>
//            <td>{email}</td>
//         </tr>
//      )
//   })
// }

// render() {
//   return (
//      <div>
//         <h1 id='title'>React Dynamic Table</h1>
//         <table id='students'>
//            <tbody>
//               {this.renderTableData()}
//            </tbody>
//         </table>
//      </div>
//   )
// }
