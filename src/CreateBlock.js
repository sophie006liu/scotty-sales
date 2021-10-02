import { useState } from "react";
import { useHistory } from "react-router-dom";



const CreateBlock = () => {
    const [school, setSchool] = useState('');
    const [place1, setPlace1] = useState('');
    const [place2, setPlace2] = useState('');
    const [place3, setPlace3] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 

    let history = useHistory();
    let fileReader = new FileReader();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
        const block = { school, place1, place2, place3, body, author };
        console.log(block);

        fetch('http://localhost:5000/blocks/', {
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(block)
        }).then(() => {
            history.push('/confirmation');
            console.log("added item")
        })
      }

    return (
        <div className="createItem">
            <h2 class="title">Add a new item</h2>
            <form onSubmit={handleSubmit}>
                <label>School:</label>
                    <br></br>
                    <input 
                        type="text" 
                        required 
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    /> 
                    <br></br>
                <label>Top campus place to eat:</label>
                    <br></br>
                    <input
                    required
                    value={place1}
                    onChange={(e) => setPlace1(e.target.value)}
                    ></input>
                    <br></br>
                <label>Second top place: </label>
                    <br></br>
                    <input
                    value={place2}
                    onChange={(e) => setPlace2(e.target.value)}
                    ></input>
                    <br></br>
                <label>Third top place: </label>
                    <br></br>
                    <input
                    value={place3}
                    onChange={(e) => setPlace3(e.target.value)}
                    ></input>
                    <br></br>
                <label>Do you have extra dinex or blocks? </label>
                    <br></br>
                    <input
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></input>
                    <br></br>
                <label> Student ID? </label>
                    <br></br>
                    <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    ></input> 
                <br></br>
                <br></br>
                <button class="btn" >Add Block</button>
            </form>
        </div>
    );

}

export default CreateBlock;