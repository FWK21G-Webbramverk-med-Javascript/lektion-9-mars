import './App.css';
import { useState } from 'react';

import SearchMovies from './components/SearchMovies';
import DisplayMovies from './components/DisplayMovies';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <SearchMovies addMovies={ setMovies } />
      <DisplayMovies movies={ movies } />
    </div>
  );
}

export default App;
