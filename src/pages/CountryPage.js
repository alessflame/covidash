// import { BarChart } from '@mui/icons-material';
import { BarChart } from '../components/barChart/barChart';
import React,{useState,useEffect,useCallback} from 'react'
import MainSection from "../components/MainSection/MainSection"
import RecoveredCard from "../components/RecoveredCard/RecoveredCard"
import { getCountryData, getCountryLast30DaysData  } from '../helper/getApi/country/getContryData';
import {setNumber} from "../helper/utils/setNumber";
import {useParams} from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useLoaderData } from 'react-router-dom/dist';


function CountryPage() {
  const loaderData=useLoaderData();

  const data= {
    labels:[`Casi|Ricoveri in ${loaderData.country}`],
    datasets: [
      {
        label: "casi",
        data: [loaderData.globalData.cases],
        backgroundColor: '#6EB5FF',
      },
    
      {
        label: "ricoverati",
        data: [loaderData.globalData.recovered],
        backgroundColor: '#4E78CC',
      },
    ],
  };


  return (
    <div>
      <MainSection globalData={loaderData.globalData} last30days={loaderData.last30Days}/>
      <RecoveredCard recovered={setNumber(loaderData.globalData.recovered)} todayRecovered={setNumber(loaderData.globalData.todayRecovered)}/>
    
    {loaderData.globalData? <BarChart data={data}/> : <CircularProgress/>}
    </div>
  )
}

export default CountryPage;