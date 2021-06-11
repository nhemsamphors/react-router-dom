import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
