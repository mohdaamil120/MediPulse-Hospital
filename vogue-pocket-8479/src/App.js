
import logo from './logo.svg';
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MainRouter from './AllRoutes/MainRouter';

function App() {
  return (
    <div className="App">
      <MainRouter/>


    </div>
  );
}

export default App;


/* 
<Home />
<About />
<Work />
<Testimonial />
<Contact />
<Footer />
*/