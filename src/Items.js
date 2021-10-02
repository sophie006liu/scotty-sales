import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import useFetch from './useFetch';

const Items = () => {
    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')
    const [filt, setFilt] = useState('');

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
              </div>
      );
  }
  
  export default Items;