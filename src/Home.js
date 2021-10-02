import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import useFetch from './useFetch';

const Home = () => {
    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')
    
    /* const handleClickAgain = (name) => {
        console.log('hello' + name);*/


      return (
        <div className = "home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>All items</h1>
            {marketables && <MarketList marketables = {marketables} /> }
      
        </div>
      );
  }
  
  export default Home;