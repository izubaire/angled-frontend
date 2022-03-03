import * as React from 'react';
import Button from '@mui/material/Button';

export default function BlueButton(props) {
  return (
      <Button
      type={props.type}
      disableElevation={props.disableElevation}
      disableRipple={props.disableRipple}
      sx={{ backgroundColor: '#00184c', '&:hover':{ backgroundColor: '#002370' }, whiteSpace:'nowrap' }}
      variant="contained"
      >{props.name}</Button>
  );
}
