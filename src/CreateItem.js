import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateItem = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
<<<<<<< Updated upstream
    const [file, setFile] = useState('');
=======
>>>>>>> Stashed changes

    let history = useHistory();
    let fileReader = new FileReader();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
<<<<<<< Updated upstream
        const marketable = { title, body, author, file };
        console.log(marketable);
=======
        const marketable = { title, category, price, author };
>>>>>>> Stashed changes

        fetch('http://localhost:8000/marketables/', {
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(marketable)
        }).then(() => {
            history.push('/confirmation');
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
                <label>Category</label>
                    <br></br>
                    <select 
                        required 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="" selected>Choose a category</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Living Spaces">Living Spaces</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <br></br>
                <label>Price:</label>
                    <br></br>
                    <input
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    ></input>
                    <br></br>
                <label>Blog author:</label>
                    <br></br>
                    <input
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    > </input>
                <br></br>
                <input type="file" onChange={(e) => setFile(fileReader.readAsDataURL(e.target.files[0]))}/>
                <img src={file}/>
                <br></br>
                <button>Add Listing</button>
            </form>
        </div>
    );

}

export default CreateItem;