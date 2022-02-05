import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <p className="navbarbrand">My ToDoList</p>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="navlink" aria-current="page" to="">Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="navlink" to="/About">About</Link>
                    </li>  
                </ul>
            
            </div>
        </div>
        </nav>
    )
}

export default Navbar
