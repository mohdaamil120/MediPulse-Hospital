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

      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
