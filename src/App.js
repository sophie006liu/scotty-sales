import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateItem from './CreateItem.js';
import MarketDetails from './MarketDetails.js';
import Items from './Items.js';
import Confirmation from './Confirmation.js';


function App() {
  return (
    <Router>
       <div className="App">
          <Navbar/> 
          <div className = "content">
            <Switch> 
              <Route exact path = "/home"> 
                <Home />
              </Route>
              <Route path = "/items"> 
                <Items />
              </Route>
              <Route path = "/createItem"> 
                <CreateItem />
              </Route>
              <Route path = "/marketables/:id"> 
                <MarketDetails />
              </Route>
              <Route path = "/confirmation">
                <Confirmation />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  
  );
}

export default App;
