import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import useFetch from './useFetch';

const Home = () => {
    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')
    const [filt, setFilt] = useState('');

    const shopLink = "http://www.google.com"
    const loginLink = "http://www.google.com"

        return (
          <div className = "home">
              {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              <h1>All items</h1>
              <select
                  value={filt}
                  onChange={(e) => console.log((e.target.value))}>
                  <option value="">Filter by:</option>
                  <option value="Low">Price: Low to High</option>
                  <option value="High">Price: High to Low</option>
                  <option value="Kitchen">Category: Kitchen</option>
                  <option value="Bedroom">Category: Bedroom</option>
                  <option value="Living Spaces">Category: Living Spaces</option>
                  <option value="Miscellaneous">Category: Miscellaneous</option>
              </select>
              {marketables && <MarketList marketables = {marketables} filt = {filt}/> }

      return (
        
        <body>
          <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
          <div className = "home">
            <div class="row">
          <div class="col-2">
            <h1>Sell and buy from <br />CMU students!</h1>
            <p>
              Our website is only accessible for verified Carnegie <br />Mellon
              students, so you can shop at ease.
            </p>
            <a href="products.html" class="btn"
              >Explore Item Listings &#8594;</a
            >
            <a href="" class="btn">Block Exchange &#8594;</a>
          </div>
        </div>
        </div>
        </body>
        
      );
  }

  export default Home;