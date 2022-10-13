import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Create';

function App() {
  
  return (
    <Router>
    <div className="App">
      <NavBar/>
     <div className="content">
      
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/create" element={<Create />} /> 
        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
