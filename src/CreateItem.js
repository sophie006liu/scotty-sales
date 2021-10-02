import { useState } from "react";
//import { useHistory } from "react-router-dom";

const CreateItem = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    //const history = useHistory;

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
        const marketable = { title, body, author };

        fetch('http://localhost:8000/marketables/', {
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(marketable)
        }).then(() => {
            //history.push('/');
            console.log("added item")
        })
      }

    return (
        <div className="createItem">
            <h2>Add a new item</h2>
            <form onSubmit={handleSubmit}>
                <label>Item name:</label>
                    <br></br>
                    <input 
                        type="text" 
                        required 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>
                <label>Price:</label>
                    <br></br>
                    <input
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></input>
                    <br></br>
                <label>Blog author:</label>
                    <br></br>
                    <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                </input>
                <br></br>
                <br></br>
                 <button>Add Blog</button>
            </form>
        </div>
    );

}

export default CreateItem;