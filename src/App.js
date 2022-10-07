
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home  from './pages/Home';
import Menu  from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      
        <Routes path='/' exact component={Home}/>
        <Routes path='/menu' exact component={Menu}/>
        <Routes path='/about' exact component={About}/>
        <Routes path='/contact' exact component={Contact}/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
