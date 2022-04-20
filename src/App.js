
import './App.css';
import Notebooks from './Notebooks';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from './AppBar';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import OneNotebook from './OneNotebook';


function App() {


  return (

    <Routes>
      <Route path="/" element={<AppBar />}></Route>
      <Route path="/one_notebook" element={<OneNotebook />} />
    </Routes>
 
  );
}

export default App;
