import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';
import { useState } from "react";




function App() {


    const [currentUser, setCurrentUser] = useState([])
    

  return (
    <div className="App">
      <h1>Typo.io</h1>
      
    <Router>
      <Routes>
      
        <Route path="/" element={<WelcomePage setCurrentUser={setCurrentUser} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home/notebooks" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/:id/home" element={<HomePage />} />
      
      </Routes>
    </Router>
    
    </div>
   
    );
}

export default App;
