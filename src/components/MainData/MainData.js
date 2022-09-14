import { Box } from '@mui/material'
import React from 'react'
import { setNumber } from '../../helper/utils/setNumber'
import PaperCard from '../PaperCard/PaperCard'

function MainData({selected, cases, todayCases, deaths, todayDeaths}) {
  return (
    <Box sx={{width:"100%", display:"flex", flexDirection:{md:"row", xs:"column" }, alignItems:"center", justifyContent:"center" }}>
     <PaperCard selected={selected===1? true : false} title="Casi" data={cases? setNumber(cases):""} todayData={todayCases===0? "0" : setNumber(todayCases) }  />
     <PaperCard selected={selected===2? true : false} title="Decessi" data={setNumber(deaths)} todayData={todayDeaths === 0? "0": setNumber(todayDeaths)} />
    </Box>
  )
}

export default MainData