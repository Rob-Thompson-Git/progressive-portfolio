import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portolio';
import Contact from './components/contact';

import './App.css';

function App() {
  console.log(window.location);
  return (
  <div>
    <Nav />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
  );
}

export default App;
