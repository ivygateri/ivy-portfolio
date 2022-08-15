import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
