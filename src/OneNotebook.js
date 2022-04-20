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
import CssBaseline from '@mui/material/CssBaseline';


const OneNotebook = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {
    const [currentNotebook, setCurrentNotebook] = useState("Productivity")
    

    
    
    return (
       
        
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>{currentNotebook}</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map(note => (
                    
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </small>
                    </div>

                ))}
            </div>

        </div>
       
    )
    
}
export default OneNotebook