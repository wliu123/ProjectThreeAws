import React, { useEffect } from "react";

function Login() {

    
  useEffect(() => {
    
    fetch('http://localhost:9292/login/:name')
    .then((res) => res.json())
    .then(Data => {
    console.log(Data)})

  }, [])

  return (
    <div>
      <h1>Logging in, please wait...</h1>
    </div>
  );
}
  
export default Login;
  