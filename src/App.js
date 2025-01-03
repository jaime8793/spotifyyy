import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SpotifyLogin from "./spotifyLogin";
import Callback from "./callBack";
import Example from "./navbar";
import fetchPlaylists from "./fetchPlaylists";

function App() {
  return (
    <>
      <SpotifyLogin />

      <fetchPlaylists accessToken="accessToken" />
    </>
  );
}

export default App;
