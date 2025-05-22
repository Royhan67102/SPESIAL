import React, { useState } from "react";
// import Footer from "../components/Footer/Footer";  
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"; 
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovie/AddMovie";
import data from "../utils/constans/data";

function Home() {
  const [movies, setMovies] = useState(data); // Gunakan useState untuk mengelola state movies

  return (
    <div>
        {/* <Navbar /> */}
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </main>
        <footer>
            {/* <Footer /> */}
        </footer>
    </div>
  );
}

export default Home;