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
                <button name="addListing" onClick={clickAddItem} >
                    Make another listing
                </button>
                <button name="Home" onClick={clickGoHome}>
                    Home
                </button>
            </div>
        </div>
    );

}

export default Confirmation;