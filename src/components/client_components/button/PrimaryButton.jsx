import * as React from 'react';
import Button from '@mui/material/Button';


export default function PrimaryButton(props) {

  const handlePrimaryButton = (handlePrimaryButton) => {
    if( handlePrimaryButton === undefined ){
      return
    }
    alert(handlePrimaryButton);
  }

  return (
    <Button
    onClick={() => handlePrimaryButton( props.handlePrimaryButton )}
    sx={{ backgroundColor:'#b09150', '&:hover':{ backgroundColor: '#c9a55a' } }}
    variant="contained"
    >{props.name}</Button>
  );
}
