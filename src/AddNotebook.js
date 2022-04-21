import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styleModal} from './styleModal';
import TextField from '@mui/material/TextField';


const AddNotebook = ({open, onClose}) => {

   
    return (
        <Modal open={open} onClose={onClose}>
        <Box sx={styleModal.wrapper}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Notebook
          </Typography>
          <Typography id="modal-modal-description" variant="subtitle2" sx={{ mt: 2 }}>
            Notebooks are useful for grouping notes around your selected topic.
          </Typography>
          <Box sx={styleModal.inputFields}>
          <TextField 
                name='name' 
                placeholder='Notebook name...' 
                label='Name' variant='outlined' 
                size='small' 
                fullWidth 
                required
            />
          </Box>
          <Box sx={styleModal.buttons}>
            <Button 
                variant='contained'
                // onClick={handleSubmit(addNotebook)}
            >
                Submit
            </Button>
            <Button 
                variant='text'
                onClick={onClose}
            >
                Cancel
            </Button>
          </Box>

        </Box>
       
       
        </Modal>
    )
    
}
export default AddNotebook