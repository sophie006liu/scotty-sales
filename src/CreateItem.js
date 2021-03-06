import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateItem = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState('');
    const [location, setLocation] = useState('');

    let history = useHistory();
    let fileReader = new FileReader();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
        const marketable = { title, category, price, author, file };

        fetch('http://localhost:8000/marketables/', {
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(marketable)
        }).then(() => {
            history.push('/confirmation');
        })
      }

    const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
    }

    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
          setFile(base64);
          console.debug("file stored",base64);
        });
    };

    return (
        <div className="createItem">
            <h2 class="title">Add a New Item</h2>
            <div class="item">
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
                <label>Category:</label>
                    <br></br>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose a category:</option>
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
                <label>Location:</label>
                    <br></br>
                    <input
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
                <input type="file" onChange={(e) => {imageUpload(e)}}/>
                <img src={file}/>
                <br></br>
                <button class = "btn">Add Listing</button>
            </form>
            </div> 
        </div>
    );

}

export default CreateItem;