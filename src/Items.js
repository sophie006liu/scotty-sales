import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import useFetch from './useFetch';

const Items = () => {
    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')

    const shopLink = "http://www.google.com"
    const blocksLink = "http://www.google.com"
    const loginLink = "http://www.google.com"

    /* const handleClickAgain = (name) => {
        console.log('hello' + name);*/


      return (
        <div className = "items">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>All items</h1>
            {marketables && <MarketList marketables = {marketables} /> }
      
        </div>
      );
  }
  
  export default Items;