import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RecoveredCard({recovered, todayRecovered}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "90%",
          height: 128,
        },
      }}
    >


      <Paper elevation={3}>
          
        <span style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <h3 style={{ fontSize:"20px", color:"#8FA1A6"}} >Ricoveri</h3>
        
        <span style={{display:"flex", justifyContent:"space-around"}}>
        <b style={{marginRight:"10px", fontSize:"17px", color:"#0388A6"}}>Totale:<b style={{color:"#457ABF"}}>{recovered}</b></b>
        <b style={{marginLeft:"10px", fontSize:"17px", color:"#0388A6"}}>Oggi:<b style={{color:"#457ABF"}}>{todayRecovered}</b></b>
        </span>
        </span>
      </Paper>
    </Box>
  )
     }