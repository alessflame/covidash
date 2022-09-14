import { Container } from '@mui/system'
import React, {useState} from 'react'
import { setNumber } from '../../helper/utils/setNumber'
import MainChart from '../MainChart/MainChart'
import MainData from '../MainData/MainData'
import MainSelect from '../MainSelect/MainSelect'

function MainSection({globalData, last30days}) {
  const [selected, setSelected]= useState(1);

  console.log(last30days);

  return (
    <Container>
    <MainSelect setSelected={setSelected} />
   {last30days ? <MainChart data={last30days} selected={selected}/> : "" } 
    <MainData {...globalData} selected={selected}/>
    </Container>
  )
}

export default MainSection