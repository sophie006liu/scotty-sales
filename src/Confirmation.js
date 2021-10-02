import { useState } from "react";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
    let history = useHistory();

    const clickAddItem = () => {
        history.push('/createItem');
    }
    const clickGoHome = () => {
        history.push('/');
    }

    return (
        <div className="confirmation">
            <h2>Success! You have added a new listing</h2>
            <div>
                <button name="addListing" onClick={clickAddItem} 
                style= {{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    marginTop: '20px',
                    marginRight: '20px',
                    boxShadow: 'none'
                }}>
                    Make another listing
                </button>
                <button name="Home" onClick={clickGoHome}
                style= {{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    marginTop: '20px',
                    marginRight: '20px',
                    outline: 'none'
                }}>
                    Home
                </button>
            </div>
        </div>
    );

}

export default Confirmation;