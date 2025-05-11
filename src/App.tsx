import './App.css'
import {Navbar} from "./components/Navbar.tsx";

interface MovieListProps {
    type: 'popular' | 'top_rated' | 'upcoming';
    title: string;
    emoji: string;
}
function App() {

  return (
      <div className='app'>
          <Navbar/>

          {/*<MovieList type='popular' title='Popular' />*/}
          {/*<MovieList type='top_rated' title='Top Rated' />*/}
          {/*<MovieList type='upcoming' title='Upcoming' />*/}
      </div>

  )
}

export default App
