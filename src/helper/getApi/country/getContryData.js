import { axiosInstance } from "../../instance";

export const getCountryData=async(country)=>{
     const response= await axiosInstance.get(`v3/covid-19/countries/${country}?strict=true`);
     const data= await response.data;
     return data;
   }
   
   
   export const getCountryLast30DaysData=async(country)=>{
     const response= await axiosInstance.get(`v3/covid-19/historical/${country}?lastdays=30`);
     const data= await response.data;
   
     return data.timeline;
   }
   