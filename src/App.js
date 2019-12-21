import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "./actions/actions";

import "./App.css";
import AlbumsTable from "./containers/AlbumsTable";

const App = ({ fetchAlbums }) => {
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    fetchAlbums();
  }, []);

  return (
    <div>
      <header>
        <h1>Albums CRUD App</h1>
      </header>

      <AlbumsTable />
      <button type='button' onClick={() => alert("clicked")}>
        Add
      </button>
    </div>
  );
};

export default connect(null, { fetchAlbums })(App);
