import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const MarketDetails = () => {
    const {id} = useParams()
    const {data: marketable, error, isPending } = 
        useFetch('http://localhost:8000/marketables/'+ id)
    const history = useHistory();

    const handleClick = () => {
      fetch('http://localhost:8000/marketables/' + marketable.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/Items');
      }) 
    }

    return ( 
        <div className =  "market-details">
       { isPending && <div>Loading...</div> }
       { error && <div>{ error }</div> }
       { marketable && (
        <article>
          <h2>{ marketable.title }</h2>
          <p> Price: ${marketable.price} </p>
          <p> Category: {marketable.category} </p>
          <img src={marketable.file}></img>
          <p> Location: {marketable.location} </p>
          <p>Posted by { marketable.author }</p>
          <button class="btn"  onClick={handleClick}> Purchase this item </button>
        </article>
      )}
        </div>
    );
}

export default MarketDetails;