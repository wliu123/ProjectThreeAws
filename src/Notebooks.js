import {useState, useEffect} from "react"
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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";

  
  function Row({notebook, currentUser, setCurrentNotebook}) {
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
          <TableCell align="right">{currentUser.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ width: 3/4, margin: 1, mx: "auto"}}>
                <Table size="small" aria-label="notes">
                  
                  <TableBody>
                    {notebook.notes.map((note) => (
                      <TableRow key={note.title}>
                        <TableCell component="th" scope="row">
                          {note.title}
                        </TableCell>
                        <TableCell>
                            Updated Time
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

const Notebooks = ({notebooks, currentUser, setCurrentNotebook}) => {
    
    // on this component, a table of all the notebooks show. When click on specific notebook it'll open up the notebook to show all the notes within
    
    return (
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Notebook Name</TableCell>
              <TableCell align="right">Belongs to</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notebooks.map((notebook) => (
              <Row key={notebook.title} notebook={notebook} currentUser={currentUser} setCurrentNotebook={setCurrentNotebook}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
    
}
export default Notebooks