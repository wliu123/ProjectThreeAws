import { useState } from "react"
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'

  
  function Row({notebook, currentUser, setCurrentNotebook, onDeleteNotebook}) {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate()
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <Button 
            variant="text" 
            onClick={() => {
              setCurrentNotebook(notebook)
              navigate("/notebooks/notes")
            }}
            > 
            {notebook.title}
            </Button>
          </TableCell>
          <TableCell >{currentUser.first_name}</TableCell>
          <Button onClick={() => onDeleteNotebook(notebook.id)} sx={{mt:2}}variant="text" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{  margin: 1, mx: "auto", }}>
                <Table size="small" aria-label="notes">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Note Title</TableCell>
                    <TableCell align="right">Last Updated</TableCell>
                  </TableRow>
                </TableHead>
                  
                  <TableBody>
                    {notebook.notes.map((note) => (
                      <TableRow key={note.title}>
                        <TableCell component="th" scope="row" align="right">
                          {note.title}
                        </TableCell>
                        <TableCell align="right">
                            Last Updated : {new Date(note.updated_at).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

const Notebooks = ({notebooks, currentUser, setCurrentNotebook, onDeleteNotebook}) => {
    
    // on this component, a table of all the notebooks show. When click on specific notebook it'll open up the notebook to show all the notes within
    
    return (
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow >
              <TableCell />
              <TableCell>Notebook Name</TableCell>
              <TableCell >Belongs to</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notebooks.map((notebook) => (
              <Row onDeleteNotebook={onDeleteNotebook} key={notebook.title} notebook={notebook} currentUser={currentUser} setCurrentNotebook={setCurrentNotebook}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
    
}
export default Notebooks