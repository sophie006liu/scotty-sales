import { Link } from 'react-router-dom';

const Navbar = () => {
    
  const shopLink = "http://www.google.com"
  const blocksLink = "http://www.google.com"
  const loginLink = "http://www.google.com"

    return (
        <nav className = "navbar">
            <Link to ="/Home"><h1> CMU MarketPlace </h1></Link>
            <div className = "links">
            <Link to = "/Home"> Home </Link> 
            <Link to = "/Items"> Items </Link> 
            <a href = {blocksLink}> Block Exchange </a> 
            <Link to ="/CreateItem">Create Listing</Link>
            </div>
        </nav>
    );
}

export default Navbar;