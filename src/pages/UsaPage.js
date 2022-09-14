import React, {useState, useEffect, useCallback} from 'react'
import CountriesTable from '../components/CountriesTable/CountriesTable'
import MainSection from "../components/MainSection/MainSection";
import RecoveredCard from "../components/RecoveredCard/RecoveredCard"
import { setNumber } from '../helper/utils/setNumber';
import { getStatesData, getUsaData, getUsaLast30DaysData } from '../helper/getApi/usa/getUsaData';



function UsaPage() {
  const [globalData, setGlobalData] = useState([]);
  const [rows, setRows] = useState([]);
  const [last30Days, setLast30Days]= useState({})

  const setLastMonth = useCallback(async () => {
    setLast30Days(await getUsaLast30DaysData());
  }, []);

  const setData = useCallback(async () => {
    setGlobalData(await getUsaData());
  }, []);

  const setCountries = useCallback(async () => {
    setRows(await getStatesData());
  }, []);

  useEffect(() => {
    setCountries();
    setData();
    setLastMonth();
  }, [setCountries, setData, setLastMonth]);

  console.log(last30Days);
  return (
    <div>
      <MainSection globalData={globalData} last30days={last30Days}/>
      {/* <CountriesTable rows={rows}/> */}
      <CountriesTable rows={rows}/>
      <RecoveredCard recovered={setNumber(globalData.recovered)} todayRecovered={globalData.todayRecovered}/>
    </div>
  )
}

export default UsaPage