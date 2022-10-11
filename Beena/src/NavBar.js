import { Link, Router } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <Router>
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create"> New Blog</Link>
            </div>
        </nav>
        </Router>
     );
}
 
export default NavBar;