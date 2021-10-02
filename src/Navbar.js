import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className = "navbar">
            <Link to ="/home"><h1> CMU MarketPlace </h1></Link>
            <div className = "links">
            <Link to = "/BlocksHome"> Block Exchange </Link>
            <Link to = "/Items"> Items </Link> 
            <Link to ="/CreateItem">Create Listing</Link>
            <Link to ="/CreateBlock">New Block Listing</Link>
            </div>
        </nav>
    );
}

export default Navbar;