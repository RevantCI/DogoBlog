import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
     <div className="content">
      <Router>
        <Switch>
          <Route path="/" > 
           <Home />
          </Route> 
          <Route path="/create" >
            <Create />
          </Route> 
        </Switch>
        </Router>
           </div>
    </div>
  );
}

export default App;
