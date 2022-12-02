import { createBrowserRouter } from "react-router-dom";
import { getLast30DaysData,getCountriesData, getGlobalData } from '../getApi/global/getGlobalData';
import { getUsaData, getStatesData, getUsaLast30DaysData } from '../getApi/usa/getUsaData';
import { getCountryData,getCountryLast30DaysData } from '../getApi/country/getContryData';


import App from "../../App";
import MainPage from "../../pages/MainPage";
import CountryPage from "../../pages/CountryPage";


const allData=async()=>{
     const globalData=await getGlobalData();
     const last30Days=await getLast30DaysData();
     const rows = await getCountriesData();
    
     return{globalData,last30Days,rows}
    };
    
    const usaData=async()=>{
      const globalData=await getUsaData();
      const last30Days=await getUsaLast30DaysData();
      const rows = await getStatesData();
     
      return{globalData,last30Days,rows}
    }
    
    const countryData=async(country)=>{
      const globalData=await getCountryData(country);
      const last30Days=await getCountryLast30DaysData(country);
      return{globalData, last30Days, country}
    }
     

export const router= createBrowserRouter([
     {
     element: <App />,
     children:[
     {
     element: <MainPage />,
     path: "/",
     loader: allData,},
     {
     element: <MainPage />,
     path: "/usa",
     loader: usaData
     },
     {
     element: <CountryPage />,
     path: "/country/:country",
     loader:({params})=> countryData(params.country)
     }] } ]);
 