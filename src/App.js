import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import {
  AiFillGithub,
  AiFillLinkedin,  
} from "react-icons/ai";
import './App.css';

function App() {
  return (
  <div>
    <Nav />
    <Home />
    <About />
  </div>
  );
}

export default App;
