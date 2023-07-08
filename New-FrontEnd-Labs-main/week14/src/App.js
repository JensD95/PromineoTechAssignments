import React from 'react';
import './App.css';
import MovieList from './MovieList';
import NavbarComponent from './Nav';
import './Nav.css';
import TFOTR from './TFOTR.jpg';
import TROTK from './TROTK.jpg';
import TTT from './TTT.jpg';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <MovieList movies={[
        {poster: TFOTR, title: "The Fellowship of the Ring", year: "2001", description: "An ancient ring threatens all that is good."},
        {poster: TTT, title: "The Two Towers", year: "2002", description: "The fellowship is broken."},
        {poster: TROTK, title: "The Return of the King", year: "2003", description: "The last journey of the fellowship."}
      ]}></MovieList>
    </div>
  );
}
export default App;