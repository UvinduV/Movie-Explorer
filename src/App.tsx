import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import MovieList from "./components/MovieList/MovieList";

function App() {

  return (
      <div className='app'>
          <Navbar/>

          <MovieList type='popular' title='Popular' />
          <MovieList type='top_rated' title='Top Rated' />
          <MovieList type='upcoming' title='Upcoming' />
      </div>

  )
}

export default App
