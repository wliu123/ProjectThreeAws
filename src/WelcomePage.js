import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function WelcomePage() {
    
    const [formState, setFormState] = useState({
        name: ""
      })

    const {name} = formState

    const [currentUser, setCurrentUser] = useState([])

    function handleChange(e) {
        const newFormState = {...formState, [e.target.name]: e.target.value}
        setFormState(newFormState)
    }

    let navigate = useNavigate();

    function handleFormSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:9292/login/${name}`)
        .then((res) => res.json())
        .then(data => console.log(data))

        // if formState.name === true
            // navigate(`/${formState.id}/home`)
    }




    return (
    <div>
      <h2>Typo.io</h2>      
      <div>
        <h2>Welcome to Typo, please sign-in.</h2>
            <form onSubmit={handleFormSubmit}>
                <input className="form-inputs" type="text" name="name" placeholder="Name" onChange={handleChange} value={name} />
                <button onClick={handleFormSubmit} id="form-btn" type="submit">Sign-in</button>
                <br></br>
                <a href="href=http://localhost:3000/sign-up">Don't have an account? Sign up</a>
            </form>

      </div>
      
    </div>
    
     
    );
  }
  
  export default WelcomePage;
  