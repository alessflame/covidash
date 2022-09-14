import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HealingIcon from '@mui/icons-material/Healing';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

export default function MainSelect({setSelected}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>setSelected(1)} label="Casi" icon={<CoronavirusIcon />} />
        <BottomNavigationAction onClick={()=>setSelected(2)}  label="Decessi" icon={<HealingIcon />} />
      </BottomNavigation>
    </Box>
  );
}