import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import MovieList from "./components/MovieList/MovieList";

function App() {

  return (
      <div className='app'>
          <Navbar/>

          <MovieList type="popular" title="Popular" emoji="🔥" />
          <MovieList type="top_rated" title="Top Rated" emoji="🏆" />
          <MovieList type="upcoming" title="Upcoming" emoji="📅" />
      </div>

  )
}

export default App
