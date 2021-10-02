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
              <h2 class="title">All Items</h2>
              {error && <div>{error}</div>}
              <div class = "stuff">
              <select
                  value={filt}
                  onChange={(e) => setFilt((e.target.value))}>
                  <option value="">Filter by:</option>
                  <option value="Low">Price: Low to High</option>
                  <option value="High">Price: High to Low</option>
                  <option value="Kitchen">Category: Kitchen</option>
                  <option value="Bedroom">Category: Bedroom</option>
                  <option value="Living Spaces">Category: Living Spaces</option>
                  <option value="Miscellaneous">Category: Miscellaneous</option>
              </select>
              {isPending && <div>Loading...</div>}
              {marketables && <MarketList marketables = {marketables} filt = {filt}/> }
              </div>
              </div>
              
      );
  }
  
  export default Items;