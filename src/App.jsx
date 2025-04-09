import './style/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './components/Movie';
import Directions from './components/Directions';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/directions" element={<Directions />} />
      </Routes>
      </BrowserRouter>
      
      {/* <h1>RandoMovie</h1> */}
      {/* <div>
        <Parameters />
      </div> */}
    </>
  )
}

export default App