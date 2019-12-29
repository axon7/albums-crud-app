import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "./actions/actions";
import { styled } from "styled-components";

import "./App.css";
import AlbumsTable from "./components/AlbumsTable";
import AddAlbumForm from "./components/AddAlbumForm";

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
      <AddAlbumForm />
      <AlbumsTable />
    </div>
  );
};

export default connect(null, { fetchAlbums })(App);
