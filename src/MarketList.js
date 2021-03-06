import { Link } from 'react-router-dom';

const MarketList = ({marketables, filt}) => {
  if (filt === "Kitchen") {
    marketables = marketables.filter(a => a.category==="Kitchen");
  }
  else if (filt === "Bedroom") {
    marketables = marketables.filter(a => a.category==="Bedroom");
  }
  else if (filt === "Living Spaces") {
    marketables = marketables.filter(a => a.category==="Living Spaces");
  }
  else if (filt === "Miscellaneous") {
    marketables = marketables.filter(a => a.category==="Miscellaneous");
  }
  else if (filt === "Low") {
    marketables = marketables.sort((a, b) => (a.price > b.price) ? 1 : -1);
  }
  else if (filt === "High") {
    marketables = marketables.sort((a, b) => (a.price < b.price) ? 1 : -1);
  }
    return (
      <div className="market-list">
        {marketables.map((marketable) =>(
            <div className="item-preview" key={marketable.id} >
              <Link to = {`/marketables/${marketable.id}`}>
              <h2>{ marketable.title }</h2>
              <p> Price: ${marketable.price} </p>
              <p> Category: {marketable.category} </p>
              <p> Location: {marketable.location} </p>
              <p>Posted by { marketable.author }</p> 
              <img src={marketable.file}></img>
              </Link>
            </div>
        ))}
        
      </div>
    );
  }
   
  export default MarketList;