import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Button } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const OneNotebook = () => {
    const [currentNotebook, setCurrentNotebook] = useState("Productivity")
    const [noteData, setNoteData] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/notes')
        .then(req => req.json())
        .then(setNoteData)
    }, [])
    
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component='nav'
                    subheader={
                        <ListSubheader component='div'>
                            {currentNotebook}
                        </ListSubheader>
                    }
                    >
                    {noteData.map(note => {
                        return (
                            <>
                            <ListItemButton>
                                <ListItemText 
                                primary={note.title}
                                primaryTypographyProps={{ variant: "overline" }}
                                />
                                <ListItemText secondary={note.body}/>
                            </ListItemButton>
                            <Divider />
                            </>
                        )
                    })}
                    </List>
                    
                </Grid>
                <Grid item xs={8}>
                    <Button variant="text" startIcon={<MenuBookIcon/>}>{currentNotebook}</Button>
                    
                </Grid>

            </Grid>
        </Box>
    )
    
}
export default OneNotebook