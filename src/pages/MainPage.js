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
import { useLoaderData } from "react-router-dom/dist";

function MainPage() {


  const data=useLoaderData();


  return (
    <div>
      {data.last30Days ?<MainSection globalData={data.globalData} last30days={data.last30Days} /> :""}
      

      <Container sx={{ display: "flex", justifyContent: "center" , m:0, p:0 }}>
        {/* <div style={{display:"flex", justifyContent:"center"}}> */}
        <CountriesTable title="Nazioni" rows={data.rows} routing={true} />

        {/* </div> */}
      </Container>
      <RecoveredCard
        recovered={setNumber(data.globalData.recovered)}
        todayRecovered={setNumber(data.globalData.todayRecovered)}
      />
    </div>
  );
}

export default MainPage;
