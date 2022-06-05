import React from 'react'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/Button";
import CancelIcon from '@mui/icons-material/Cancel';;


const DrawerItem = ({name, image, price, quantity, total, dispatchCart}) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', width: "350px", alignItems:"center", margin:"5px"}}>
        <img src={image} alt={name} width="80" height="80" />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "6rem"}}>
          <p>{name}</p>
          <p>${price}</p>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "6rem", alignItems: "flex-end"}}>
          <p>QTY: {quantity}</p>
          <p>Cost: ${total.toFixed(2)} </p>
        </Box>
        <IconButton onClick={() => dispatchCart({ type: "REMOVE", payload: { name } })} ><CancelIcon /></IconButton>
      </Box>
      <hr />
    </Box>
  )
}

export default DrawerItem