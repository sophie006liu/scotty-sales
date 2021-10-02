import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const MarketDetails = () => {
    const {id} = useParams()
    const {data: marketable, error, isPending } = 
        useFetch('http://localhost:8000/marketables/'+ id)

    return ( 
        <div className =  "market-details">
       { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { marketable && (
        <article>
          <h2>{ marketable.title }</h2>
          <p>Posted by { marketable.author }</p>
          <div>{ marketable.body }</div>
        </article>
      )}
        </div>
    );
}

export default MarketDetails;