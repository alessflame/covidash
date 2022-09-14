import { axiosInstance } from "../../instance";
import { createUsaData } from "../../utils/setTable";

export const getStatesData=async()=>{
     const response= await axiosInstance.get("v3/covid-19/states");
     const jsonData = await response.data;
  
     
     const data = await jsonData.map((element)=>{return createUsaData(element.state,  element.cases, element.deaths)})
     
     return data;

}

export const getUsaData=async()=>{
     const response= await axiosInstance.get("v3/covid-19/countries/usa?strict=true");
     const data= await response.data;
   
     return data;
   }


   export const getUsaLast30DaysData=async()=>{
     const response= await axiosInstance.get("v3/covid-19/historical/usa?lastdays=30");
     const data= await response.data;
   
     return data.timeline;
   }
   