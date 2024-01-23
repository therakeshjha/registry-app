import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry() {
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)
    
    useEffect(() => {
        if(textInput.length>10) setError(true);
        else setError(false)
    },[textInput])

    const addItem = (e) => {
        e.preventDefault();
        if (error) return;
        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("");

    };
    const removeItem =(index) =>{
        let newData = [...registryData];
        newData.splice(index,1);
        setRegistryData(newData)
    }

    const editItem =(index) =>{
        if (error) return;
        let newData = [...registryData];
        newData[index] = textInput
        setRegistryData(newData)
    }

    
    console.log(registryData);
    return (
        <div>
            <h1>Registry</h1>
            <Link to='/'>click here for home.</Link>
            <form onSubmit={addItem}>
                <label> Text Input:
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error ? <span color="red">Error occur.</span> : null}
            {
                registryData.map((item, index) => {
                    return(
                        <li key={index}>{item}
                        <button onClick={()=>removeItem(index)}>Remove</button>
                        <button onClick={()=>editItem(index)}>Edit</button>
                        </li>
                    )
                }
                )
            }
        </div>

    );
}

export default Registry;