import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className = "navbar">
            <h1> CMU MarketPlace </h1>
            <div className = "links">
            <Link to = "/"> Home Shop </Link> 
            <Link to = "/BlocksHome"> Blocks </Link>  
            <Link to ="/CreateItem" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>New Shop Listing
            </Link>
            <Link to ="/CreateBlock" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>New Block Listing
            </Link>
            </div>
        </nav>
    );
}

export default Navbar;