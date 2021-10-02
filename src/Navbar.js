import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className = "navbar">
            <Link to ="/Home"><h1> Scotty Sales </h1></Link>
            <div class="logo">
            <img src="images/logo.png" width="90px"/>
          </div>
            <div className = "links">
            <Link to = "/Items"> Items </Link> 
            <Link to = "/BlocksHome"> Block Exchange </Link>
            <Link to ="/CreateItem">New Item Listing</Link>
            <Link to ="/CreateBlock">New Block Listing</Link>
            </div>
        </nav>
    );
}

export default Navbar;