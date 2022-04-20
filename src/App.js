import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
///////////////////////////////////////////////////////////////////////////////
import WelcomePage from './WelcomePage';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';
import AppBar from './AppBar';
import Notebooks from './Notebooks';
import OneNotebook from './OneNotebook';
import MainDisplay from './MainDisplay';


function App() {

  const [currentUser, setCurrentUser] = useState([])
    
  return (
    <div className="App">
      <h1>Typo.io</h1>
    <BrowserRouter>
          <Routes>

            <Route path="/" element={<WelcomePage setCurrentUser={setCurrentUser} />}/> 
            <Route path=":id/home" element={<><AppBar /> <Notebooks /> </>} />
            <Route path="/notebooks/notes" element={<><AppBar /> <OneNotebook /> <MainDisplay /> </>} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />

          </Routes>
    </BrowserRouter>
    </div>
   
    );
}

export default App;
