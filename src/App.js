import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';
import Login from './Login';



function App() {
  

  return (
    <div className="App">
      <h1>Typo.io</h1>
      
    <Router>
      <Routes>
      
        <Route path="/" element={<WelcomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home/notebooks" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
    
    </div>
   
    );
}

export default App;
