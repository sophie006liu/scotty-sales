import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import useFetch from './useFetch';

const Home = () => {
    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')


    const shopLink = "http://www.google.com"
    const loginLink = "http://www.google.com"


      return (
        
        <body>
          <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
          <div className = "home">
            <div class= "container">
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
        </div>
        </body>
        
      );
  }

  export default Home;
