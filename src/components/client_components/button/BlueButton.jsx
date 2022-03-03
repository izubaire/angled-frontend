import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BlueButton(props) {
  return (
    // <Link to={props.link === undefined ? '' : props.link} className='link'>
    // </Link>
      <Button
      type={props.type}
      disableElevation={props.disableElevation}
      disableRipple={props.disableRipple}
      sx={{ backgroundColor:'#4789b7', '&:hover':{ backgroundColor: '#4d9ed7' }, whiteSpace:'nowrap' }}
      variant="contained"
      >{props.name}</Button>
  );
}
