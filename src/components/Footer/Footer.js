import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import React from "react";
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
    <h3 style={{margin:"25px 0", color:"#0388A6"}}><a href="https://alessifrancesco.it" style={{color:"#0388A6"}}>Alessi Francesco</a>
    <LanguageIcon sx={{color:"#8FA1A6"}}/>
    </h3>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton sx={{marginX:"10px"}}>
          <a style={{textDecoration:"none", color:"#33bbff"}} href="https://www.linkedin.com/in/francesco-aless">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </IconButton>
        
        <IconButton sx={{ color: "black",marginX:"5px" }}>
          <a style={{textDecoration:"none",color: "black"}} href="https://github.com/alessflame">
          <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </IconButton>
        <IconButton sx={{ color: "teal",marginX:"5px" }}>
        <a style={{textDecoration:"none",color: "teal"}} href="https://talent.start2impact.it/profile/francesco-alessi">

          <RocketLaunchIcon sx={{ fontSize: 40 }} />
          </a>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
