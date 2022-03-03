import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LabelSelect(props) {
  const [age, setAge] = React.useState('');


  let menuItemsList = props.menuItem;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={props.style}>
      <FormControl fullWidth size={props.size}>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.name}
          onChange={handleChange}
          sx={props.styleSelect}
          required={props.required}
        >{
          menuItemsList.map((item, i) => (
            <MenuItem key={i} value={item.value}>{item.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </Box>
  );
}
