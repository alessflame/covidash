import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { setNumber } from '../../helper/utils/setNumber';

export default function PaperCard({selected, title,data, todayData, elevation}) {
  return (
    <Box
      sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 240,
          height: 128,
        },
      }}
    >
      <Paper  sx={selected===true? {backgroundColor:"#84A9D9"}: {}} elevation={!elevation ===false ? elevation: 0}>
        <span style={{display:"flex", flexDirection:"column", alignItems:"start", marginLeft:"20px"}}>
        <h3 style={{color:"#D7D7D9"}}>{title}</h3>
        
        <b style={{color:"#0388A6"}}>Totale: <b style={{color:"#457ABF"}}>{data}</b></b>
        <b style={{color:"#0388A6"}}>Oggi: <b style={{color:"#457ABF"}}>{todayData}</b></b>
        </span>
      </Paper>
    </Box>
  );
}