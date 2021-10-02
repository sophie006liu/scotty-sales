import { Link } from 'react-router-dom';

const BlocksList = ({blocks}) => {
    return (
      <div className="market-list">
        {blocks.map((block) =>(
            <div className="item-preview" key={block.id} >
              <Link to = {`/blocks/${block.id}`}>
              <h2>{ block.school }</h2>
              <p>Posted by { block.author }</p> 
              </Link>
            </div>
        ))}
        
      </div>
    );
  }
   
  export default BlocksList;