import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {

  let menuItemsList = props.menuItem;

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl size="small" >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx= {{ minWidth: 180, backgroundColor:'white', '&:hover': 'white'}}
        >
        {
          menuItemsList.map((list, i) => (
            <MenuItem key={i} value={list.value}>{list.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </div>
  );
}
