import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
     <div className="content">
      <Router>
        <Routes>
          <Route path="/" element = { <Home />}>
          </Route> 
        </Routes>
        </Router>
           </div>
    </div>
  );
}

export default App;
