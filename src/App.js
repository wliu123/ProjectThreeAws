
import './App.css';
import Notebooks from './Notebooks';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from './AppBar';


function App() {


  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar/>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      
    <Notebooks />
    </Box>
  </Box>
  );
}

export default App;
