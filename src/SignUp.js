import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: "",
        picture: ""
    })
    
    const {name,email, bio, picture} = formData

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
    }

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        navigate('/');
    }


    return (
    <div>
      <h2>Typo</h2>
      <h1>Hello this is the Sign-Up Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="name" value={name} onChange={handleChange}/>
            <input type="text" id="email" placeholder="email" value={email} onChange={handleChange}/>
            <input type="text" id="bio" placeholder="bio" value={bio} onChange={handleChange}/>
            <input type="text"  id="picture" placeholder="link to profile picture" value={picture} onChange={handleChange}/>
            <button onClick={handleSubmit} type="submit">Sign-up</button>
        </form>
    </div>
     
    );
  }
  
  export default SignUp;
  