import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Genres from "./components/Genres";
import MovieContainer from "./components/MovieContainer";

function App() {
  return (
    <>
      <Header />
      {/* <Genres /> */}
      <MovieContainer />
    </>
  );
}

export default App;
