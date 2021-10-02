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
            <div class="header">
            <div class= "container">
              <div class="row">
                <div class="col-2">
                  <h1>Sell and buy from <br />CMU students!</h1>
                  <p>
                    Our website is only accessible for verified Carnegie <br />Mellon
                    students, so you can shop at ease.
                  </p>
                  <a href="/Items" class="btn">
                    Explore Item Listings &#8594;
                  </a>
                  <a href="/BlocksHome" class="btn">Block Exchange &#8594;</a>
                </div>
              </div>
              </div>
            </div>
            <div class="categories">
      <h2 class="title">Featured Items</h2>
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <a href="product-detail.html">
              <img src="images/featured/featured1.png" />
              <h4>Leather Sofa</h4>
              <p class="location">Cathedral Mansions</p>
              <p>$400.00</p>
            </a>
          </div>
          <div class="col-3">
            <img src="images/featured/featured2.png" />
            <h4>Bean Bag</h4>
            <p class="location">Carnegie Mellon</p>
            <p>$30.00</p>
          </div>
          <div class="col-3">
            <img src="images/featured/featured3.png" />
            <h4>Dining Chairs</h4>
            <p class="location">Webster Hall</p>
            <p>$20.00</p>
          </div>
        </div>
      </div>
</div>

<div class="categories">
  <h2 class="title">Block Exchange</h2>
  <div class="small-container">
    <div class="row">
      <div class="col-b">
        <h4>Block for Tsaocaa</h4>
        <p>Michelle Li</p>
      </div>
      <div class="col-b">
        <h4>Block for Free</h4>
        <p>Jonathan Ho</p>
      </div>
      <div class="col-b">
        <h4>Block for Mentorship</h4>
        <p>Stephanie Guan</p>
      </div>
    </div>
  </div>
</div>

        </div>
        </body>
        
        
        
        
      );
  }

  export default Home;
