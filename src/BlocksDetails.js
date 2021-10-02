import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlocksDetails = () => {
    const {id} = useParams()
    const {data: block, error, isPending } = 
        useFetch('http://localhost:5000/blocks/'+ id)
    const history = useHistory();

    const handleClick = () => {
      fetch('http://localhost:5000/blocks/' + block.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/Home');
      }) 
    }

    return ( 
        <div className =  "market-details">
       { isPending && <div>Loading...</div> }
       { error && <div>{ error }</div> }
       { block && (
        <article>
          <h2>Top choice: { block.place1 }</h2>
          <h3>Other places they are interested in: { block.place2 }, { block.place3 }</h3>
          <p>Posted by { block.author }, { block.school } </p>
          <p>Paying with: { block.body }</p> 
          <button class="btn" onClick={handleClick}> Meet around the block! </button>
        </article>
      )} 
        </div>
    ); 
}

export default BlocksDetails;