import { useState , useEffect} from "react";
import MarketList from "./MarketList.js";
import { Redirect, Route } from "react-router";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";


const Login = () => {
    let history = useHistory();

    const {data: marketables, isPending, error} = useFetch('http://localhost:8000/marketables')
    const shopLink = "http://www.google.com"
    const loginLink = "http://www.google.com"

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (user == "abigail2" || user == "mli6" || user == "sguan2" || user == "sophiel2") {
            history.push('/home');
        }
      }

      return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                    <br></br>
                    <input 
                        type="text" 
                        required
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                <br></br>
                <label>Password:</label>
                    <br></br>
                    <input 
                        type="password"
                        required
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                <br></br>
                <button class="btn" onClick={handleSubmit}>Login</button>
            </form>
        </div>
      );
  }

  export default Login;
