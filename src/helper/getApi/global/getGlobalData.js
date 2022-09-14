import { axiosInstance } from "../../instance";
import { createData } from "../../utils/setTable";

export const getCountriesData=async()=>{
   const response= await axiosInstance.get("v3/covid-19/countries");
   const jsonData = await response.data;

   
   const data = await jsonData.map((element)=>{return createData(element.country, element.countryInfo.flag, element.cases, element.deaths)})
   
   return data;


}

export const getGlobalData=async()=>{
  const response= await axiosInstance.get("v3/covid-19/all");
  const data= await response.data;

  return data;
}


export const getLast30DaysData=async()=>{
  const response= await axiosInstance.get("v3/covid-19/historical/all?lastdays=30");
  const data= await response.data;

  return data;
}
