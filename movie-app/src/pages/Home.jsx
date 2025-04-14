import Footer from "../components/Footer/Footer";  
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"; 
import Movies from "../components/Movies/Movies";

function Home() {
  return (
    <div>
        <Navbar/>
        <main>
            <Hero/>
            <Movies/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default Home;