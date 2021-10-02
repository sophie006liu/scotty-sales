import { useState , useEffect} from "react";
import BlocksList from "./BlocksList.js";
import useFetch from './useFetch';

const BlocksHome = () => {
    const {data: blocks, isPending, error} = useFetch('http://localhost:5000/blocks')

    /* const handleClickAgain = (name) => {*/
        console.log('in blocks');

      return (
        <div className = "home">
      
          <div class = "container">
          <h2 class = "title">All Block Exchange Options</h2>
          {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            
            { blocks && <BlocksList blocks = {blocks}/>}
            </div>
            
          </div>
      );
  }
  
  export default BlocksHome;