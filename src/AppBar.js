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
import Toolbar from '@mui/material/Toolbar';
import Notebooks from './Notebooks';
import {useState, useEffect} from "react"
import OneNotebook from './OneNotebook';
import MainDisplay from './MainDisplay';

const drawerWidth = 240;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppBar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [notes, setNotes] = useState([])
    const [activeNote, setActiveNote] = useState(false)

    useEffect(() => {
      fetch('http://localhost:9292/notes')
      .then(req => req.json())
      .then(data => setNotes(data))
  }, [])


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "Untitled",
      body: "",
      lastModified: Date.now()
    }
    setNotes([...notes, newNote])
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => {
      if (note.id === activeNote) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotes)
  }

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote)
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
      <Box sx={{ flexGrow: 0, m: 2}}>
            <Tooltip title="View account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar style={{ marginRight: "14px" }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography >Current User </Typography>  
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
      <Box sx={{ '& > :not(style)': { m:3 } }}>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          <AddIcon />
          Add New
        </Fab>
      </Box>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    {/* <OneNotebook notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
    <MainDisplay activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/> */}
    
    
    
  </Box>
  );
    
}
export default AppBar