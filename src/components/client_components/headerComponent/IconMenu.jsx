import React from 'react'
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function IconMenu(props) {

  return (
    <Box sx={{color:'white', display: props.showHide.display }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
        </IconButton>
    </Box>
  )
}
