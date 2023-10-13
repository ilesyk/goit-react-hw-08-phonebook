import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div >
      <Typography sx={{marginBottom:'10px'}}>Find contacts by name</Typography>
      <TextField
        id="outlined-basic"
        label="Enter name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        sx={{ width:'350px'}}
        onChange={evt => dispatch(filterValue(evt.target.value))
        }
      />
    </div>
  );
};
