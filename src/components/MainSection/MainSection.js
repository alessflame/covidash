import { Container } from '@mui/system'
import React, {useState} from 'react'
import MainChart from '../MainChart/MainChart'
import MainData from '../MainData/MainData'
import MainSelect from '../MainSelect/MainSelect'

function MainSection({globalData, last30days}) {
  const [selected, setSelected]= useState(1);


  return (
    <Container>
    <MainSelect setSelected={setSelected} />
   {last30days ? <MainChart data={last30days} selected={selected}/> : "" } 
    <MainData {...globalData} selected={selected}/>
    </Container>
  )
}

export default MainSection