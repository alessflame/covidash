import { axiosInstance } from "../../instance";

export const getItalyData=async()=>{
     const response= await axiosInstance.get("v3/covid-19/countries/italy?strict=true");
     const data= await response.data;
     return data;
   }
   
   
   export const getItalyLast30DaysData=async()=>{
     const response= await axiosInstance.get("v3/covid-19/historical/italy?lastdays=30");
     const data= await response.data;
   
     return data.timeline;
   }
   