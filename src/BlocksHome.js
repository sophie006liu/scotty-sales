import { useState , useEffect} from "react";
import BlocksList from "./BlocksList.js";
import useFetch from './useFetch';

const BlocksHome = () => {
    const {data: blocks, isPending, error} = useFetch('http://localhost:5000/blocks')

    /* const handleClickAgain = (name) => {*/
        console.log('in blocks');

      return (
        <div className = "home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>All items</h1>
            {blocks && <BlocksList blocks = {blocks} /> }
      
        </div>
      );
  }
  
  export default BlocksHome;