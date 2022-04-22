import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react"
import AddNotebook from './AddNotebook';
import { fontSize } from '@mui/system';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

const AppBar = ({currentUser, addNewNotebook, setNewNotebook, open, setOpen, notebooks, setCurrentNotebook}) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    let navigate = useNavigate()
 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const addNotebook = () => {
    setOpen(true)
  }


  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline/>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ flexGrow: 0, m: 1}}>
            <Tooltip title="View account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar style={{ marginRight: "14px" }} alt="Remy Sharp" src={currentUser.picture} />
                <Typography >{currentUser.name} </Typography>  
              </IconButton>
              
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={() => console.log("Hello")}component="span" textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Divider/>
      
      <Box 
        sx={{
          pt: 2,
          width: '75%', 
          display: 'inline-flex', 
          flexWrap: 'wrap',
          borderRadius: 2,
          md:2,
          fontWeight: 'bold',
          pl: 2
        }}>
      
      <Typography variant='p'>Bio: </Typography>
      <Typography variant='subtitle2'>{currentUser.bio}</Typography>
      </Box>
      <Box sx={{ '& > :not(style)': { m:3 } }}>
        <IconButton onClick={addNotebook}>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          <AddIcon />
          Add New
        </Fab>
        </IconButton>
      </Box>
      <List>
      <ListItem 
            button 
            onClick={() => {
              navigate(`/${currentUser.id}/home`)
            }}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
      </ListItem>
        {notebooks.map((notebook, index) => (
          <ListItem 
            button 
            key={notebook.title} 
            onClick={() => {
              setCurrentNotebook(notebook)
              navigate("/notebooks/notes")
            }}>
            <ListItemIcon>
              <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary={notebook.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    <AddNotebook open={open} onClose={() => setOpen(false)} addNewNotebook={addNewNotebook} setNewNotebook={setNewNotebook}/>
  </Box>
  );
    
}
export default AppBar