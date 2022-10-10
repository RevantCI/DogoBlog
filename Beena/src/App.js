import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
     <div className="content">
      
        <Routes>
          <Route path="/">
          <Home />
          </Route>
        </Routes>
      
           </div>
    </div>
  );
}

export default App;
