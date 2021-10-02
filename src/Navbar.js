import { Link } from 'react-router-dom';

const Navbar = () => {
    
  const shopLink = "http://www.google.com"
  const blocksLink = "http://www.google.com"
  const loginLink = "http://www.google.com"

    return (
        <nav className = "navbar">
            <h1> CMU MarketPlace </h1>
            <div className = "links">
            <Link to = "/"> Home </Link> 
            <a href = {blocksLink}> Blocks </a> 
            <Link to ="/CreateItem" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>New Listing
            </Link>
            </div>
        </nav>
    );
}

export default Navbar;