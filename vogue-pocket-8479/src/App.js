
import logo from './logo.svg';
import "./App.css";
import MainRouter from './AllRoutes/MainRouter';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
      <Footer/>

    </div>
  )
}


export default App;

