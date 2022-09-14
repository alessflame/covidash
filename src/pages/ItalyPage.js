// import { BarChart } from '@mui/icons-material';
import { BarChart } from '../components/barChart/barChart';
import React,{useState,useEffect,useCallback} from 'react'
import MainSection from "../components/MainSection/MainSection"
import RecoveredCard from "../components/RecoveredCard/RecoveredCard"
import { getItalyData, getItalyLast30DaysData } from '../helper/getApi/italy/getItalyData';
import {setNumber} from "../helper/utils/setNumber";

function ItalyPage() {
  const [globalData, setGlobalData] = useState([]);
  const [last30Days, setLast30Days]= useState({})

  const setLastMonth = useCallback(async () => {
    setLast30Days(await getItalyLast30DaysData());
  }, []);

  const setData = useCallback(async () => {
    setGlobalData(await getItalyData());
  }, []);

  // const setCountries = useCallback(async () => {
  //   setRows(await getCountriesData());
  // }, []);

  useEffect(() => {
    setData();
    setLastMonth();
  }, [setData, setLastMonth]);

  const data= {
    labels:["Casi|Ricoveri in Italia"],
    datasets: [
      {
        label: "casi",
        data: [globalData.cases],
        backgroundColor: '#6EB5FF',
      },
    
      {
        label: "ricoverati",
        data: [globalData.recovered],
        backgroundColor: '#4E78CC',
      },
    ],
  };


console.log(data);
  return (
    <div>
      <MainSection globalData={globalData} last30days={last30Days}/>
      <RecoveredCard recovered={setNumber(globalData.recovered)} todayRecovered={setNumber(globalData.todayRecovered)}/>
    
    {globalData? <BarChart data={data}/> : ""}
    </div>
  )
}

export default ItalyPage