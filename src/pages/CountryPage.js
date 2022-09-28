// import { BarChart } from '@mui/icons-material';
import { BarChart } from '../components/barChart/barChart';
import React,{useState,useEffect,useCallback} from 'react'
import MainSection from "../components/MainSection/MainSection"
import RecoveredCard from "../components/RecoveredCard/RecoveredCard"
import { getCountryData, getCountryLast30DaysData  } from '../helper/getApi/country/getContryData';
import {setNumber} from "../helper/utils/setNumber";
import {useParams} from "react-router-dom";
import { CircularProgress } from "@mui/material";


function ItalyPage() {
  const {country}= useParams();

  const [globalData, setGlobalData] = useState([]);
  const [last30Days, setLast30Days]= useState({})

  const setLastMonth = useCallback(async () => {
    if(country) setLast30Days(await getCountryLast30DaysData(country));
  }, [country]);

  const setData = useCallback(async () => {
    if(country) setGlobalData(await getCountryData(country));
  }, [country]);

  // const setCountries = useCallback(async () => {
  //   setRows(await getCountriesData());
  // }, []);

  useEffect(() => {
    setData();
    setLastMonth();
  }, [setData, setLastMonth]);

  const data= {
    labels:[`Casi|Ricoveri in ${country}`],
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


  return (
    <div>
      <MainSection globalData={globalData} last30days={last30Days}/>
      <RecoveredCard recovered={setNumber(globalData.recovered)} todayRecovered={setNumber(globalData.todayRecovered)}/>
    
    {globalData? <BarChart data={data}/> : <CircularProgress/>}
    </div>
  )
}

export default ItalyPage