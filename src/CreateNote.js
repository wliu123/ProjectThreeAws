// import { useEffect, useState } from "react"
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import { Button } from "@mui/material";
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';



const CreateNote = () => {
    // const [title, setTitle] = useState("")
    // const [body, setBody] = useState("")
    // const [currentNotebook, setCurrentNotebook] = useState("Productivity")
    // const [noteData, setNoteData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/notes')
    //     .then(req => req.json())
    //     .then(setNoteData)
    // }, [])

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch('http://localhost:9292/new_note', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify({
    //             title: title,
    //             body: body,
    //             notebook_id: currentNotebook.id,
    //             user_id: currentUser.id
    //         })
    //     })
    // }
    
    return (
        <p> Hello World</p>
        // <Box sx={{flexGrow: 1}}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={4}>
        //             <List
        //             sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        //             component='nav'
        //             subheader={
        //                 <ListSubheader component='div'>
        //                     {currentNotebook}
        //                 </ListSubheader>
        //             }
        //             >
        //             {noteData.map(note => {
        //                 return (
        //                     <>
        //                     <ListItemButton>
        //                         <ListItemText 
        //                         primary={note.title}
        //                         primaryTypographyProps={{ variant: "overline" }}
        //                         />
        //                         <ListItemText secondary={note.body}/>
        //                     </ListItemButton>
        //                     <Divider />
        //                     </>
        //                 )
        //             })}
        //             </List>
                    
        //         </Grid>
        //         <Grid item xs={8}>
        //             <Button variant="text" startIcon={<MenuBookIcon/>}>{currentNotebook}</Button>
        //             <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        //             <TextField 
        //                 onChange={(e) => setTitle(e.target.value)}
        //                 sx={{mt:10, display: "block"}}
        //                 label="Title" 
        //                 variant="standard" 
        //                 fullWidth 
        //                 required/>
        //             <TextField 
        //                 onChange={(e) => setBody(e.target.value)}
        //                 sx={{mt:10, display: "block"}}
        //                 label="Body" 
        //                 variant="standard" 
        //                 multiline
        //                 rows={21}
        //                 fullWidth 
        //                 required/>
        //                 <BottomNavigation sx={{width: "100%", bgcolor: "white"}}>
        //                     <Button type="submit" variant="contained"> Submit </Button>
        //                 </BottomNavigation>
        //             </form>
        //         </Grid>

        //     </Grid>
        // </Box>
    )
    
}
export default CreateNote