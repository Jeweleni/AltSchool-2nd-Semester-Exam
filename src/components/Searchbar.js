import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import { Card } from "semantic-ui-react";


function Searchbar() {

    const [username, setUsername] = useState('')
    const [repos, setRepos] = useState([]);

    const handleChange = (e) =>{
      setUsername(e.target.value);  
    };

    const handleClick = async () => {
        console.log(username);

        try {
        const result = await axios(`http://api.github.com/users/${username}/repos`)

        console.log (result)
        setRepos(result.data);
        } catch(err){
            console.log(err);
        }

        
    }; 


    return (
        <>
            <div className="search">
                <input type= 'text' value={username} placeholder="GitHub Username" onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </div>
            <Results repos={repos}/>
            <Card></Card>
            
        </>
    );
};
export default Searchbar;