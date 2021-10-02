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
        history.push('/');
      }) 
    }

    return ( 
        <div className =  "market-details">
       { isPending && <div>Loading...</div> }
       { error && <div>{ error }</div> }
       { marketable && (
        <article>
          <h2>{ marketable.title }</h2>
          <p> Category: { marketable.category }</p>
          <p>Posted by { marketable.author }</p>
          <div>{ marketable.body }</div>
          <button onClick={handleClick}> Purchase this item </button>
        </article>
      )}
        </div>
    );
}

export default MarketDetails;