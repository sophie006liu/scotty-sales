import { Link } from 'react-router-dom';

const MarketList = ({marketables}, {filt}) => {
  if (filt === "Kitchen") {
    marketables = marketables.filter(a => a.category==="Kitchen");
  }
  else {
    marketables.sort((a, b) => (a.category > b.category) ? 1 : -1);
  }
    return (
      <div className="market-list">
        {marketables.map((marketable) =>(
            <div className="item-preview" key={marketable.id} >
              <Link to = {`/marketables/${marketable.id}`}>
              <h2>{ marketable.title }</h2>
              <img src={marketable.file}></img>
              <p>Posted by { marketable.author }</p> 
              </Link>
            </div>
        ))}
        
      </div>
    );
  }
   
  export default MarketList;