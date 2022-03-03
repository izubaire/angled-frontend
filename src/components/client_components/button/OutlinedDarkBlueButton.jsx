import * as React from 'react';
import Button from '@mui/material/Button';

export default function BlueButton(props) {
  return (
      <Button
      type={props.type}
      disableElevation={props.disableElevation}
      disableRipple={props.disableRipple}
      sx={{ color: '#00184c', border:'1px solid #00184c', '&:hover':{ backgroundColor: '#dbdbdb', border:'1px solid #002370' }, whiteSpace:'nowrap' }}
      variant='outlined'
      >{props.name}</Button>
  );
}
