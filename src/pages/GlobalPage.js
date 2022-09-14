import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import PaperCard from "../components/PaperCard/PaperCard";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import { Container } from "@mui/system";
import {
  getCountriesData,
  getGlobalData,
  getLast30DaysData,
} from "../helper/getApi/global/getGlobalData";
import RecoveredCard from "../components/RecoveredCard/RecoveredCard";
import { setNumber } from "../helper/utils/setNumber";

function GlobalPage() {
  const [globalData, setGlobalData] = useState({});
  const [rows, setRows] = useState([]);
  const [last30Days, setLast30Days]= useState({})

  const setLastMonth = useCallback(async () => {
    setLast30Days(await getLast30DaysData());
  }, []);


  const setData = useCallback(async () => {
    setGlobalData(await getGlobalData());
  }, []);



  const setCountries = useCallback(async () => {
    setRows(await getCountriesData());
  }, []);

  useEffect(() => {
    setCountries();
    setData();
    setLastMonth();
  }, [setCountries, setData, setLastMonth]);


  console.log(last30Days);
  return (
    <div>
      {last30Days ?<MainSection globalData={globalData} last30days={last30Days} /> : ""}
      

      <Container sx={{ display: "flex", justifyContent: "center" , m:0, p:0 }}>
        {/* <div style={{display:"flex", justifyContent:"center"}}> */}
        <CountriesTable title="Nazioni" rows={rows} />

        {/* </div> */}
      </Container>
      <RecoveredCard
        recovered={setNumber(globalData.recovered)}
        todayRecovered={setNumber(globalData.todayRecovered)}
      />
    </div>
  );
}

export default GlobalPage;
